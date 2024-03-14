import React, { useState } from "react";
import styled from "styled-components";
import AnimateHeight from "react-animate-height";

import { SubmitButton } from "@components/elements";
import { spacings, colors, global, fonts } from "@styles/vars";
import { QuizResultProps } from "@interfaces";

interface QuizTextInputResultProps {
    result: QuizResultProps[];
    onClose: () => void;
    number_of_word: number;
    correctAnswers: number;
}

const QuizTextInputResult: React.FC<QuizTextInputResultProps> = ({
    result,
    onClose,
    correctAnswers,
    number_of_word,
}) => {
    const [myErrors, setMyErrors] = useState<boolean>(false);

    const toggleMyErrors = () => {
        setMyErrors(!myErrors);
    };

    return (
        <SQuizTextInputResult>
            <SAnswers>
                {correctAnswers <= number_of_word / 3 ? (
                    <div>Вы только в начале пути!</div>
                ) : correctAnswers <= number_of_word / 2 ? (
                    <div>Нужно больше практики!</div>
                ) : correctAnswers <= number_of_word / 1.5 ? (
                    <div>Нужно больше практики!</div>
                ) : correctAnswers <= number_of_word / 1.1 ? (
                    <div>Вы профи!</div>
                ) : (
                    <div>Не плохо!</div>
                )}
                <div>
                    {correctAnswers} из {number_of_word}
                </div>
            </SAnswers>

            <SMyErrors>
                <SMyErrorsHead onClick={() => toggleMyErrors()}>
                    <div>Мои ошибки</div>
                    <div>{myErrors ? "Свернуть" : "Развернуть"}</div>
                </SMyErrorsHead>
                <AnimateHeight duration={500} height={myErrors ? "auto" : 0}>
                    <SMyErrorsList>
                        {result
                            .filter((item) => !item.isCorrect)
                            .map((item, idx) => {
                                return (
                                    <SItem
                                        key={idx}
                                        className={
                                            item.isCorrect
                                                ? "correct"
                                                : "incorrect"
                                        }
                                    >
                                        Слово{" "}
                                        <b>{item.word_translate[0].title}</b> вы
                                        перевели как{" "}
                                        <b className="red">{item.value}</b>
                                        <div>
                                            Правильный ответ{" "}
                                            {item.word_original.map(
                                                (i, idx) => (
                                                    <span key={idx}>
                                                        {i.title}
                                                    </span>
                                                )
                                            )}
                                        </div>
                                    </SItem>
                                );
                            })}
                    </SMyErrorsList>
                </AnimateHeight>
            </SMyErrors>

            <SubmitButton
                size="large"
                style={"primary"}
                onClick={() => onClose()}
            >
                Repeat quiz
            </SubmitButton>
        </SQuizTextInputResult>
    );
};

const SQuizTextInputResult = styled.div``;
const SAnswers = styled.div`
    margin-bottom: ${spacings.offset_20};
    display: flex;
    gap: ${spacings.offset_5};
    font-size: ${fonts.fs_body_2xl};
    font-weight: ${fonts.fw_bold};
`;
const SMyErrors = styled.div`
    border: ${global.border_width} solid ${colors.bg_grey};
    /* background-color: ${colors.bg_grey_200}; */
    padding: ${spacings.offset_10} ${spacings.offset_20};
    border-radius: ${global.border_radius_large};
    margin-bottom: ${spacings.offset_20};
    &:hover {
        border-color: ${colors.bg_danger_light};
    }
`;
const SMyErrorsHead = styled.div`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    color: ${colors.typo_primary};
    > div {
        transition: all ${global.transition};
        &:first-child {
            font-size: ${fonts.fs_body_l};
            font-weight: ${fonts.fw_medium};
        }
        &:last-child {
            ${SMyErrors}:hover & {
                color: ${colors.typo_link};
            }
        }
    }
`;
const SMyErrorsList = styled.div`
    padding: ${spacings.offset_10} 0 0;
`;
const SItem = styled.div`
    margin-bottom: ${spacings.offset_5};
    /* font-size: ${fonts.fs_body_s}; */
    &.correct {
    }
    &.incorrect {
    }
    span {
        font-weight: ${fonts.fw_bold};
        color: ${colors.typo_positive};
        &:after {
            content: " или ";
            color: ${colors.typo_primary};
            font-weight: ${fonts.fw_regular};
        }
        :last-child {
            &:after {
                content: "";
            }
        }
    }
    b.red {
        color: ${colors.typo_negative};
    }
`;

export default QuizTextInputResult;
