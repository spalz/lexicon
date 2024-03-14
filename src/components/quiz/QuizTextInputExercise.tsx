import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Tooltip } from "react-tooltip";

import { SubmitButton, BaseButton } from "@components/elements";
import { fonts, colors, forms, spacings, global } from "@styles/vars";
import { getShuffledArr } from "@utils";
import { down, SizeDown } from "@config/breakpoints_vars";

interface QuizTextInputProps {
    word_translate: Array<{ title: string }>;
    word_original: Array<{ title: string }>;

    hint: boolean;
    hint_text?: Array<{ id: number; original: string; transition: string }>;
    setActiveQuestion: any;
    lang: "rus_eng" | "eng_rus" | "eng";
    //
    // setResult: (t: QuizResultProps[]) => void;
    setResult: any;
    //
    setCorrectAnswers: any;
    correctAnswers: number;
}

const QuizTextInput: React.FC<QuizTextInputProps> = ({
    word_translate,
    word_original,
    hint,
    hint_text,
    lang,
    setActiveQuestion,
    setResult,
    setCorrectAnswers,
    correctAnswers,
}) => {
    const only_mobile = SizeDown("sm");

    const [state, setState] = useState<"base" | "correct" | "incorrect">(
        "base"
    );
    const [inputValue, setInputValue] = useState<string>("");
    const [emptyText, setEmptyText] = useState<boolean>(false);
    const [wordTranslateShuffle, setWordTranslateShuffle] = useState<any>([]);

    // useEffect(() => {
    //     setWordTranslateShuffle(getShuffledArr(word_translate));
    // }, []);

    const onFormSubmit = (val: string, e: any, show_hint?: boolean) => {
        const value: string = val.replace(/\s/g, "");
        const math: string = word_original[0].title.toLowerCase();

        if (state === "base") {
            if (value.toLowerCase() === math) {
                setState("correct");
                setEmptyText(false);
                setCorrectAnswers((prev: number) => prev + 1);
                setResult((prev: any) => {
                    return [
                        ...prev,
                        {
                            word_original: word_original,
                            word_translate: word_translate,
                            math: math,
                            value: value,
                            isCorrect: true,
                            correct_answers: correctAnswers,
                        },
                    ];
                });
            } else if (value) {
                setState("incorrect");
                setEmptyText(false);
                setResult((prev: any) => {
                    return [
                        ...prev,
                        {
                            word_original: word_original,
                            word_translate: word_translate,
                            math: math,
                            value: value,
                            isCorrect: false,
                            correct_answers: correctAnswers,
                        },
                    ];
                });
            } else {
                setEmptyText(true);
            }
        } else {
            setActiveQuestion((prev: number) => prev + 1);
        }
        e.preventDefault();
    };

    const onChange = (val: string) => {
        setInputValue(val);
    };

    const Skip = () => {
        setState("incorrect");
        setEmptyText(false);
        setResult((prev: any) => {
            return [
                ...prev,
                {
                    word_original: word_original,
                    word_translate: word_translate,
                    math: "",
                    value: "",
                    isCorrect: false,
                    correct_answers: correctAnswers,
                },
            ];
        });
    };

    console.log(hint_text);

    return (
        <SQuizTextInputExercise className={state}>
            <SQuestion>
                {/* // TODO сделать рандомный вывод слов */}
                <SQuestionWord>
                    {lang === "eng_rus"
                        ? "Enter the translation into english"
                        : "Enter the translation into russian"}
                    <span id="hint_tooltip">{word_translate[0].title}</span>
                    {hint_text && hint_text.length ? (
                        <Tooltip
                            anchorId="hint_tooltip"
                            content={hint_text[0].original}
                        />
                    ) : null}
                </SQuestionWord>
            </SQuestion>
            <SForm
                onSubmit={(e: { target: any }) =>
                    onFormSubmit(e.target[0].value, e, true)
                }
            >
                <SInput
                    autoFocus
                    value={inputValue}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={"Enter"}
                />
                {only_mobile && (
                    <SMiss>
                        <span onClick={() => Skip()}>skip word</span>
                    </SMiss>
                )}
                <SActions>
                    {!only_mobile && (
                        <BaseButton
                            size="large"
                            style={"secondary"}
                            disabled={state !== "base"}
                            onClick={() => Skip()}
                        >
                            Skip
                        </BaseButton>
                    )}
                    <SRight>
                        {emptyText && <SError>Input word or skip</SError>}
                        {state === "incorrect" && (
                            <SIncorrect>
                                Сorrect word:{" "}
                                <b>
                                    {word_original.map((i, idx) => (
                                        <i key={idx}>{i.title}</i>
                                    ))}
                                </b>
                            </SIncorrect>
                        )}
                        {state === "correct" && <SCorrect>Верно!</SCorrect>}
                        <SNext>
                            <SubmitButton
                                size="large"
                                style={
                                    state === "base"
                                        ? "secondary"
                                        : state === "correct"
                                        ? "positive"
                                        : state === "incorrect"
                                        ? "negative"
                                        : "secondary"
                                }
                            >
                                {state === "correct" || state === "incorrect"
                                    ? "Next"
                                    : "Check"}
                            </SubmitButton>
                        </SNext>
                    </SRight>
                </SActions>
            </SForm>
        </SQuizTextInputExercise>
    );
};

const SQuizTextInputExercise = styled.div``;
const SQuestion = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: ${spacings.offset_5};
    margin-bottom: ${spacings.offset_20};
`;
const SQuestionWord = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    span {
        display: inline-flex;
        gap: 4px;
        margin-left: ${spacings.offset_5};
        background-color: ${colors.bg_grey_200};
        border: 1px solid ${colors.bg_grey};
        padding: 1px 6px;
        border-radius: ${global.border_radius_large};
        font-weight: ${fonts.fw_medium};
    }
`;
const SForm = styled.form``;
const SInput = styled.input`
    width: 100%;
    padding: ${forms.field_spacing_v} ${forms.field_spacing_h};
    font-family: ${fonts.ff_base};
    border: ${forms.field_border_width} solid ${colors.form_base_br};
    border-radius: ${forms.field_border_radius};
    font-size: ${forms.field_font_size};
    margin-bottom: ${spacings.offset_10};
    ${down("sm")} {
        margin-bottom: 0;
    }
    .base & {
        border-color: #eeeded;
    }
    &:focus {
        border-color: #ccc;
    }
    .correct & {
        border-color: ${colors.form_positive_br};
    }
    .incorrect & {
        border-color: ${colors.form_negative_br};
    }
`;
const SMiss = styled.div`
    display: flex;
    justify-content: flex-end;
    span {
        display: block;
        padding: ${spacings.offset_5} 5px;
        color: ${colors.typo_secondary};
        &:focus {
            color: ${colors.typo_link};
        }
    }
`;
const SActions = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${spacings.offset_40};
    ${down("sm")} {
        /* position: fixed;
        bottom: 0;
        left: 0;
        width: 100%; */
        /* padding: ${spacings.offset_20} ${spacings.offset_wrapper}; */
        margin-top: ${spacings.offset_20};
        justify-content: flex-end;
    }
`;
const SRight = styled.div`
    display: flex;
    align-items: center;
    gap: ${spacings.offset_20};
    ${down("sm")} {
    }
`;

const SNext = styled.div``;

const SError = styled.div`
    color: ${colors.typo_negative};
    ${down("sm")} {
        flex: 1;
        text-align: right;
        font-size: ${fonts.fs_body_s};
    }
`;

const SIncorrect = styled.div`
    ${down("sm")} {
        flex: 1;
        text-align: right;
        font-size: ${fonts.fs_body_s};
    }
`;

const SCorrect = styled.div`
    color: ${colors.typo_positive};
    font-weight: ${fonts.fw_medium};
    ${down("sm")} {
        flex: 1;
        text-align: right;
        font-size: ${fonts.fs_body_s};
    }
`;

export default QuizTextInput;
