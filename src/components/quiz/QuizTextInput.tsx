import React, { useState } from "react";
import styled from "styled-components";

import { CrossIcon } from "@components/icons";
import { spacings, colors, global, fonts } from "@styles/vars";
import { QuizTextInputExercise, QuizTextInputResult } from "@components/quiz";
import { WordAttributesProps, QuizResultProps } from "@interfaces";
import { down } from "@config/breakpoints_vars";

interface QuizTextInputProps {
    words: Array<WordAttributesProps>;
    number_of_word: number;
    hint: boolean;
    lang: "rus_eng" | "eng_rus" | "eng";
    setStart: (t: boolean) => void;
}

const QuizTextInput: React.FC<QuizTextInputProps> = ({
    words,
    number_of_word,
    hint,
    lang,
    setStart,
}) => {
    const [activeQuestion, setActiveQuestion] = useState<number>(1);
    const [result, setResult] = useState<QuizResultProps[]>([]);
    const [correctAnswers, setCorrectAnswers] = useState<number>(0);

    let words_original: Array<{ title: string }>;
    let word_translate: Array<{ title: string }>;

    const onClose = () => {
        setStart(false);
        setActiveQuestion(1);
    };

    return (
        <SQuizTextInput>
            <STop>
                <SProgress>
                    <span
                        style={{
                            width: `${
                                (activeQuestion > number_of_word
                                    ? number_of_word
                                    : activeQuestion / number_of_word) * 100
                            }%`,
                        }}
                    >
                        {activeQuestion}
                    </span>
                    <SNumberOfWord>{number_of_word}</SNumberOfWord>
                </SProgress>
                <SClose onClick={() => onClose()} title={"Закрыть"}>
                    <CrossIcon />
                </SClose>
            </STop>
            {activeQuestion > number_of_word && (
                <QuizTextInputResult
                    result={result}
                    onClose={onClose}
                    number_of_word={number_of_word}
                    correctAnswers={correctAnswers}
                />
            )}

            {words
                .slice(activeQuestion - 1, activeQuestion)
                .map((item, idx) => {
                    // TODO сделать рандомный вывод слов оригинала и перевода
                    if (lang === "rus_eng") {
                        word_translate = item.attributes.original;
                        words_original = item.attributes.transition;
                    } else if (lang === "eng_rus") {
                        word_translate = item.attributes.transition;
                        words_original = item.attributes.original;
                    }

                    console.log("item.attributes", item.attributes);

                    return (
                        <QuizTextInputExercise
                            key={activeQuestion}
                            lang={lang}
                            setActiveQuestion={setActiveQuestion}
                            //
                            word_translate={word_translate}
                            word_original={words_original}
                            //
                            hint={hint}
                            hint_text={item.attributes.hints}
                            //
                            setResult={setResult}
                            //
                            setCorrectAnswers={setCorrectAnswers}
                            correctAnswers={correctAnswers}
                        />
                    );
                })}
        </SQuizTextInput>
    );
};

const SQuizTextInput = styled.div``;

const STop = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: ${spacings.offset_40};
    gap: ${spacings.offset_5};
    width: 100%;
    position: relative;
`;

const SClose = styled.div`
    position: absolute;
    right: -30px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    color: ${colors.typo_placeholder};
    transition: color ${global.transition};
    padding: 5px;
    &:hover {
        color: ${colors.typo_negative};
    }
    ${down("sm")} {
        position: relative;
        left: 0;
        top: 0;
        transform: none;
    }
    svg {
        width: 16px;
        height: 16px;
    }
`;

const SProgress = styled.div`
    flex: 1;
    background-color: ${colors.bg_grey_200};
    border-radius: ${global.border_radius_large};
    overflow: hidden;
    position: relative;
    span {
        display: block;
        background-color: ${colors.bg_success};
        height: 24px;
        padding-right: ${spacings.offset_5};
        display: flex;
        justify-content: flex-end;
        align-items: center;
        min-width: 35px;
        font-size: ${fonts.fs_body_xs};
        color: ${colors.typo_inverse};
        z-index: 2;
        position: relative;
        transition: width 0.5s ease-in-out;
    }
`;

const SNumberOfWord = styled.div`
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    font-size: ${fonts.fs_body_xs};
    color: ${colors.typo_secondary};
    opacity: 0.6;
`;

export default QuizTextInput;
