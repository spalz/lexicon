import React, { useState, useEffect } from "react";
import styled from "styled-components";
import toast from "react-hot-toast";

import { fonts, colors, global } from "@styles/vars";

interface WordsCheckInputProps {
    words: Array<{ title: string }>;
    setCorrect: any;
    setIncorrect: any;
    clear: number;
}

const WordsCheckInput: React.FC<WordsCheckInputProps> = ({
    words,
    setCorrect,
    setIncorrect,
    clear,
}) => {
    const [state, setState] = useState<"base" | "correct" | "incorrect">(
        "base"
    );
    const [showHint, setShowHint] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>("");

    const hint_join = words.map((i) => {
        return i.title;
    });
    const hint = hint_join.join(" or ");

    useEffect(() => {
        if (clear > 0) {
            setInputValue("");
            setState("base");
        }
    }, [clear]);

    const onFormSubmit = (val: string, e: any, show_hint?: boolean) => {
        const value = val.replace(/\s/g, "");

        const math = words.find(
            (element) => element.title.toLowerCase() === value.toLowerCase()
        );

        if (value.toLowerCase() === math?.title) {
            if (state !== "correct") {
                setCorrect((prev: number) => prev + 1);
            }
            setState("correct");
        } else if (value) {
            if (state !== "incorrect") {
                setIncorrect((prev: number) => prev + 1);
            }
            setState("incorrect");
            toast(
                <SToast>
                    The correct answer would be: <span>{hint}</span>
                </SToast>,
                {
                    duration: 4000,
                    position: "top-center",
                }
            );
        } else {
            if (show_hint) {
                setShowHint(true);
                setTimeout(() => {
                    setShowHint(false);
                }, 500);
            }
        }
        e.preventDefault();
    };

    const onChange = (val: string) => {
        setInputValue(val);
    };

    const placeholder = "Translate";

    console.log("hint", hint);

    return (
        <SForm
            onSubmit={(e: { target: any }) =>
                onFormSubmit(e.target[0].value, e, true)
            }
            className={state}
        >
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
    .train & {
        display: block;
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
`;

const SToast = styled.div`
    color: ${colors.typo_secondary};
    span {
        color: ${colors.typo_primary};
        font-weight: ${fonts.fw_bold};
    }
`;

export default WordsCheckInput;
