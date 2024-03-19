import React, { useState, useEffect } from "react";
import styled from "styled-components";
import toast, { Toaster } from "react-hot-toast";
import AnimateHeight from "react-animate-height";
import CN from "classnames";
import dayjs from "dayjs";

import { Headline, BaseButton } from "@components/elements";
import { Container } from "@components/layout";
import { spacings, fonts, colors, global } from "@styles/vars";
import { down } from "@config/breakpoints_vars";
import { getShuffledArr } from "@utils";

// import { verbs } from "@data/verbs_book";
import { verbs } from "@data/verbs_book";
import { verbs_book_result } from "@data/verbs_book_result";

interface CheckProps {
    words: Array<string>;
    setCorrect: any;
    setIncorrect: any;
    setMistake: any;
    form: number;
    clear: number;
}

const Check: React.FC<CheckProps> = ({
    words,
    setCorrect,
    setIncorrect,
    setMistake,
    form,
    clear,
}) => {
    const [state, setState] = useState<
        "base" | "correct" | "incorrect" | "mistake"
    >("base");
    const [showHint, setShowHint] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>("");
    const [ban, setBan] = useState<boolean>(false);
    const [errorField, setErrorField] = useState<boolean>(false);
    const [mistakeField, setMistakeField] = useState<boolean>(false);

    const hint = words.join(" or ");

    useEffect(() => {
        if (clear > 0) {
            setInputValue("");
            setState("base");
            setErrorField(false);
            setMistakeField(false);
        }
    }, [clear]);

    const onFormSubmit = (val: string, e: any, show_hint?: boolean) => {
        const value = val.replace(/\s/g, "");

        const math = words.find(
            (element) => element.toLowerCase() === value.toLowerCase()
        );

        if (value.toLowerCase() === math) {
            if (state !== "correct") {
                !ban && setCorrect((prev: number) => prev + 1);
                setBan(true);
            }
            setState("correct");
        } else if (value) {
            if (state !== "incorrect") {
                !ban && setIncorrect((prev: number) => prev + 1);
                setBan(true);
                setErrorField(true);
            }
            setState("incorrect");
        } else {
            if (show_hint) {
                !ban && setIncorrect((prev: number) => prev + 1);
                setShowHint(true);
                setTimeout(() => {
                    setShowHint(false);
                }, 500);
                setBan(true);
                setErrorField(true);
            }
        }
        e.preventDefault();
    };

    const onChange = (val: string) => {
        setInputValue(val);
    };

    const onMistake = () => {
        if (mistakeField === false) {
            setMistake((prev: number) => prev + 1);
            setIncorrect((prev: number) => prev - 1);
            setCorrect((prev: number) => prev + 1);
            setMistakeField(true);
            setState("mistake");
        }
    };

    const placeholder =
        form === 1
            ? "Infinitive"
            : form === 2
            ? "Past simple"
            : form === 3
            ? "Past Participle"
            : "";

    return (
        <SForm
            onSubmit={(e: { target: any }) =>
                onFormSubmit(e.target[0].value, e, true)
            }
            className={state}
        >
            <div
                className={CN(`mistake`, {
                    show_error: errorField,
                    show_mistake: mistakeField,
                })}
                onClick={() => onMistake()}
            />
            <input
                onBlur={(e: { target: { value: string } }) =>
                    onFormSubmit(e.target.value, e)
                }
                value={inputValue}
                onChange={(e) => onChange(e.target.value)}
                placeholder={showHint ? hint : placeholder}
            />
        </SForm>
    );
};

const SForm = styled.form`
    width: 100%;
    display: none;
    position: relative;
    .train & {
        display: block;
    }
    .mistake {
        opacity: 0;
        transition: all 0.3s ease-in-out;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        margin-top: 1px;
        right: 10px;
        &.show_error {
            opacity: 1;
            &:before {
                color: ${colors.form_negative_br};
            }
        }
        &.show_mistake {
            opacity: 1;
            &:before {
                color: #ffaa56;
            }
        }
        &:before {
            content: "✖";
            font-size: 10px;
            display: block;
        }
    }
    input {
        border: 2px solid;
        width: 100%;
        height: 30px;
        padding-left: 5px;
        border-radius: ${global.border_radius};
        font-family: ${fonts.ff_base};
        font-size: ${fonts.fs_body_s};
        ::placeholder,
        ::-webkit-input-placeholder {
            color: #b7b7b7;
        }
        :-ms-input-placeholder {
            color: #b7b7b7;
        }
        ${down("sm")} {
            font-size: ${fonts.fs_body_xs};
        }
    }
    &.base {
        input {
            border-color: #eeeded;
            &:focus {
                border-color: #ccc;
            }
        }
    }
    &.correct {
        input {
            border-color: ${colors.form_positive_br};
        }
    }
    &.incorrect {
        input {
            border-color: ${colors.form_negative_br};
        }
    }
    &.mistake {
        input {
            border-color: #ffaa56;
        }
    }
`;

const VerbsBook = () => {
    const [train, setTrain] = useState(true);
    const [correct, setCorrect] = useState<number>(0);
    const [incorrect, setIncorrect] = useState<number>(0);
    const [mistake, setMistake] = useState<number>(0);
    const [hideRU, setHideRU] = useState<boolean>(true);
    const [clear, setClear] = useState<number>(0);
    const [wordsShuffle, setWordsShuffle] = useState<any>([]);

    const reset = () => {
        setClear((prev) => prev + 1);
    };

    useEffect(() => {
        setWordsShuffle(getShuffledArr(verbs));
    }, []);

    console.log(wordsShuffle);

    return (
        <SPage className={train ? "train" : ""}>
            <Container full={false}>
                <STop>
                    <Headline level={1} size="h2" offset={["bottom-0"]}>
                        Irregular verbs
                    </Headline>
                    <STrain>
                        <BaseButton
                            style={train ? "primary" : "interactive"}
                            onClick={() => setTrain((prev) => !prev)}
                            size={"small"}
                        >
                            <SButtonTrain>
                                <span>{train ? "End" : "Start"} training</span>
                                {train ? (
                                    <svg
                                        viewBox="0 0 512 512"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                    >
                                        <path
                                            d="M224,435.8V76.1c0-6.7-5.4-12.1-12.2-12.1h-71.6c-6.8,0-12.2,5.4-12.2,12.1v359.7c0,6.7,5.4,12.2,12.2,12.2h71.6   C218.6,448,224,442.6,224,435.8z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M371.8,64h-71.6c-6.7,0-12.2,5.4-12.2,12.1v359.7c0,6.7,5.4,12.2,12.2,12.2h71.6c6.7,0,12.2-5.4,12.2-12.2V76.1   C384,69.4,378.6,64,371.8,64z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        viewBox="0 0 512 512"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                    >
                                        <path
                                            d="M405.2,232.9L126.8,67.2c-3.4-2-6.9-3.2-10.9-3.2c-10.9,0-19.8,9-19.8,20H96v344h0.1c0,11,8.9,20,19.8,20  c4.1,0,7.5-1.4,11.2-3.4l278.1-165.5c6.6-5.5,10.8-13.8,10.8-23.1C416,246.7,411.8,238.5,405.2,232.9z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                )}
                            </SButtonTrain>
                        </BaseButton>
                    </STrain>
                </STop>
                <SInfo>
                    <AnimateHeight duration={500} height={train ? "auto" : 0}>
                        <div>
                            <div>
                                <span>Correct:</span> {correct}
                            </div>
                            <div>
                                <span>Incorrect:</span> {incorrect}
                            </div>
                            <div>
                                <span>Mistakes:</span> {mistake}
                            </div>
                        </div>
                    </AnimateHeight>
                </SInfo>
                <STable>
                    <SRow className="head">
                        <SCell className="word">Word</SCell>
                        <SGroup>
                            <SCell>Infinitive</SCell>
                            <SCell>Past simple</SCell>
                            <SCell>Past Participle</SCell>
                        </SGroup>
                    </SRow>
                    {wordsShuffle.map((item: any, idx: number) => {
                        return (
                            <SRow key={idx}>
                                <SCell
                                    className={CN(`word`, {
                                        hideRU: hideRU && !train,
                                    })}
                                >
                                    <div>
                                        <span>{idx + 1}</span>
                                        {item.forms[0].translate}
                                    </div>
                                </SCell>
                                <SGroup>
                                    {item.forms.map((i: any, idx: number) => {
                                        return (
                                            <SCell key={idx}>
                                                <Check
                                                    words={i.word}
                                                    setCorrect={setCorrect}
                                                    setIncorrect={setIncorrect}
                                                    setMistake={setMistake}
                                                    form={idx + 1}
                                                    clear={clear}
                                                />
                                                <SWord>
                                                    {i.word.map(
                                                        (
                                                            i: any,
                                                            idx: number
                                                        ) => (
                                                            <i key={idx}>{i}</i>
                                                        )
                                                    )}
                                                </SWord>
                                            </SCell>
                                        );
                                    })}
                                </SGroup>
                            </SRow>
                        );
                    })}
                </STable>
                <SReset>
                    {train && (
                        <BaseButton onClick={() => reset()} size="small">
                            Reset
                        </BaseButton>
                    )}
                </SReset>
                <STableInfo>
                    <STableInfoRow className="head">
                        <STableInfoCell>
                            <span>
                                Corrects / {verbs.length}-{verbs.length * 3}
                            </span>
                        </STableInfoCell>
                        <STableInfoCell>
                            <span>Incorrects</span>
                        </STableInfoCell>
                        <STableInfoCell>
                            <span>Mistakes</span>
                        </STableInfoCell>
                        <STableInfoCell>
                            <span>Date</span>
                        </STableInfoCell>
                    </STableInfoRow>
                    {verbs_book_result.map((item, idx) => {
                        return (
                            <STableInfoRow key={idx}>
                                <STableInfoCell>
                                    <span>{item.correct}</span>
                                </STableInfoCell>
                                <STableInfoCell>
                                    <span>{item.incorrect}</span>
                                </STableInfoCell>
                                <STableInfoCell>
                                    <span>{item.mistake}</span>
                                </STableInfoCell>
                                <STableInfoCell>
                                    <span>
                                        {dayjs(item.date).format(
                                            "DD MMM YY hh:mm"
                                        )}
                                    </span>
                                </STableInfoCell>
                            </STableInfoRow>
                        );
                    })}
                </STableInfo>
            </Container>
            <Toaster />
        </SPage>
    );
};

const SPage = styled.div``;
const STop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${spacings.offset_20};
    gap: ${spacings.offset_20};
    ${down("sm")} {
        align-items: flex-start;
        flex-direction: column;
        gap: ${spacings.offset_10};
    }
`;
const SInfo = styled.div`
    margin-bottom: ${spacings.offset_40};
    > div > div > div {
        display: flex;
        gap: ${spacings.offset_20};
        font-size: ${fonts.fs_body_s};
    }
    span {
        font-weight: ${fonts.fw_medium};
    }
`;
const STrain = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`;
const SButtonTrain = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    svg {
        width: 16px;
        height: 16px;
    }
`;

const STable = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${spacings.offset_10};
    ${down("sm")} {
        font-size: ${fonts.fs_body_s};
    }
`;
const SRow = styled.div`
    display: flex;
    align-items: center;
    gap: ${spacings.offset_10};
    border-bottom: 1px solid ${colors.border};
    padding-bottom: ${spacings.offset_10};
    ${down("sm")} {
        display: block;
        border-bottom: 0;
    }
    &:last-child {
        border-bottom: 0;
    }
    &.head {
        font-weight: ${fonts.fw_bold};
        color: ${colors.typo_secondary};
        ${down("sm")} {
            display: none;
        }
    }
`;
const SCell = styled.div`
    display: flex;
    gap: 5px;
    flex: 1;
    ${down("sm")} {
        flex: inherit;
        .train & {
            flex: 1;
        }
    }
    span {
        display: none;
    }
    > div {
        display: inline-flex;
    }
    &.word {
        font-weight: ${fonts.fw_medium};
        flex: 1 250px;
        transition: all 0.1s;
        &.hideRU {
            > div {
                filter: blur(4px);
                &:hover {
                    filter: blur(0);
                }
            }
        }
    }
`;
const SWord = styled.div`
    height: 30px;
    display: flex;
    align-items: center;
    background-color: ${colors.bg_grey_200};
    border-radius: ${global.border_radius_big};
    padding: 0 8px;
    font-size: ${fonts.fs_body_s};
    font-weight: ${fonts.fw_regular};
    .train & {
        display: none;
    }
    /* &.two {
        &:before {
            content: " / ";
        }
    } */
`;
const SGroup = styled.div`
    display: flex;
    gap: ${spacings.offset_20};
    width: 100%;
    ${down("sm")} {
        gap: ${spacings.offset_5};
        margin-top: 6px;
    }
`;
const SReset = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: ${spacings.offset_80};
`;

///
///
///
///

const STableInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: ${spacings.offset_80};
    gap: ${spacings.offset_10};
    ${down("sm")} {
        font-size: ${fonts.fs_body_s};
    }
`;

const STableInfoRow = styled.div`
    display: flex;
    align-items: center;
    gap: ${spacings.offset_10};
    border-bottom: 1px solid ${colors.border};
    padding-bottom: ${spacings.offset_10};
    ${down("sm")} {
    }
    &:last-child {
        border-bottom: 0;
    }
    &.head {
        font-weight: ${fonts.fw_bold};
        color: ${colors.typo_secondary};
    }
`;

const STableInfoCell = styled.div`
    display: flex;
    gap: 5px;
    flex: 1;
    ${down("sm")} {
    }
    > div {
        display: inline-flex;
    }
    &:last-child {
        width: 100%;
    }
`;

export default VerbsBook;
