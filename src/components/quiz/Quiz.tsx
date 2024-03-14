import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Headline, Textline, BaseButton } from "@components/elements";
import { Layout, Wrapper } from "@components/layout";
import { spacings, fonts, colors, global } from "@styles/vars";
import { SettingItem, QuizTextInput } from "@components/quiz";
import { getShuffledArr } from "@utils";
import { down } from "@config/breakpoints_vars";
import { useProject } from "@context";
import { useGetCategoriesQuery, useGetWordsQuery } from "@redux";

const Quiz = () => {
    const { header_show } = useProject();

    const [type, setType] = useState<"text_input" | "one_of_several">(
        "text_input"
    );
    const [category, setCategory] = useState<number>(1);
    const [complexity, setComplexity] = useState<"easy" | "normal" | "hard">(
        "easy"
    );
    const [hint, setHint] = useState<boolean>(false);
    const [lang, setLang] = useState<"rus_eng" | "eng_rus" | "eng">("rus_eng");
    //
    const [start, setStart] = useState<boolean>(false);
    const [wordsShuffle, setWordsShuffle] = useState<any>([]);

    // number of word in relation to complexity
    const number_of_word: number =
        complexity === "easy"
            ? 20
            : complexity === "normal"
            ? 30
            : complexity === "hard"
            ? 40
            : 20;

    const words_customized = wordsShuffle.slice(0, number_of_word);

    const {
        data: dataCats,
        isFetching: isFetchingCats,
        isSuccess: isSuccessCats,
        isLoading: isLoadingCats,
    } = useGetCategoriesQuery({});
    const { data, isSuccess, isFetching, isLoading } = useGetWordsQuery({
        category: category,
        limit: number_of_word,
    });

    useEffect(() => {
        if (data && data.data) {
            setWordsShuffle(getShuffledArr(data?.data));
        }
    }, [complexity, data]);

    useEffect(() => {
        if (start) {
            header_show(false);
        } else {
            header_show(true);
        }
    }, [start, header_show]);

    return (
        <Layout padding={false}>
            <SPage>
                {start && isSuccess && !isFetching ? (
                    <QuizTextInput
                        words={words_customized}
                        number_of_word={number_of_word}
                        hint={hint}
                        lang={lang}
                        setStart={setStart}
                    />
                ) : (
                    <>
                        <Headline level={1} size="h1" offset={["bottom-5"]}>
                            Quiz english words
                        </Headline>
                        <Textline offset={["bottom-20"]}>
                            Customize the quiz for yourself and click start
                        </Textline>
                        <SSettings>
                            <SSettingsSRow>
                                <SSetting>
                                    <SSettingTitle>Type</SSettingTitle>
                                    <SSettingList>
                                        <SettingItem
                                            active={type === "text_input"}
                                            onClick={() =>
                                                setType("text_input")
                                            }
                                            title="Text input"
                                        />
                                        <SettingItem
                                            active={type === "one_of_several"}
                                            onClick={() =>
                                                setType("one_of_several")
                                            }
                                            title="One of several"
                                            disabled={true}
                                        />
                                    </SSettingList>
                                </SSetting>
                                <SSetting>
                                    <SSettingTitle>Complexity</SSettingTitle>
                                    <SSettingList>
                                        <SettingItem
                                            active={complexity === "easy"}
                                            onClick={() =>
                                                setComplexity("easy")
                                            }
                                            title="Easy"
                                        />
                                        <SettingItem
                                            active={complexity === "normal"}
                                            onClick={() =>
                                                setComplexity("normal")
                                            }
                                            title="Normal"
                                        />
                                        <SettingItem
                                            active={complexity === "hard"}
                                            onClick={() =>
                                                setComplexity("hard")
                                            }
                                            title="Hard"
                                        />
                                    </SSettingList>
                                </SSetting>
                            </SSettingsSRow>
                            <SSettingsSRow>
                                <SSetting>
                                    <SSettingTitle>Hints</SSettingTitle>
                                    <SSettingList>
                                        <SettingItem
                                            active={hint}
                                            onClick={() => setHint(true)}
                                            title="True"
                                            disabled={true}
                                        />
                                        <SettingItem
                                            active={!hint}
                                            onClick={() => setHint(false)}
                                            title="False"
                                            disabled={true}
                                        />
                                    </SSettingList>
                                </SSetting>
                                <SSetting>
                                    <SSettingTitle>Lang</SSettingTitle>
                                    <SSettingList>
                                        <SettingItem
                                            active={lang === "rus_eng"}
                                            onClick={() => setLang("rus_eng")}
                                            title="Rus → Eng"
                                        />
                                        <SettingItem
                                            active={lang === "eng_rus"}
                                            onClick={() => setLang("eng_rus")}
                                            title="Eng → Rus"
                                        />
                                        <SettingItem
                                            active={lang === "eng"}
                                            onClick={() => setLang("eng")}
                                            title="Eng"
                                            disabled={true}
                                        />
                                    </SSettingList>
                                </SSetting>
                            </SSettingsSRow>
                            <SSettingsSRow>
                                <SSetting>
                                    <SSettingTitle>Category</SSettingTitle>
                                    <SSettingList>
                                        {isSuccessCats &&
                                            dataCats?.data.map((item) => {
                                                return (
                                                    <SettingItem
                                                        key={item.id}
                                                        active={
                                                            category === item.id
                                                        }
                                                        onClick={() =>
                                                            setCategory(item.id)
                                                        }
                                                        title={
                                                            item.attributes
                                                                .title
                                                        }
                                                    />
                                                );
                                            })}
                                    </SSettingList>
                                </SSetting>
                            </SSettingsSRow>
                        </SSettings>
                        <Wrapper offset={["top-20"]}>
                            <BaseButton
                                size="large"
                                onClick={() => setStart(!start)}
                                loading={isFetching || isLoading}
                            >
                                Start →
                            </BaseButton>
                        </Wrapper>
                    </>
                )}
            </SPage>
        </Layout>
    );
};

const SPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: calc(100vh - ${global.header_height});
    padding: ${spacings.offset_80} 0 ${spacings.offset_120};
    padding-left: ${spacings.offset_wrapper};
    padding-right: ${spacings.offset_wrapper};
    max-width: 760px;
    margin: 0 auto;
    ${down("sm")} {
        justify-content: flex-start;
    }
`;

const SSettings = styled.div``;
const SSettingsSRow = styled.div`
    display: flex;
    /* flex-direction: column; */
    gap: ${spacings.offset_10};
    margin-bottom: ${spacings.offset_10};
    > div {
        flex: 1 auto;
        background-color: ${colors.bg_grey_200};
        border-radius: ${global.border_radius_large};
        padding: ${spacings.offset_10} ${spacings.offset_20};
    }
    &:nth-child(1),
    &:nth-child(2) {
        > div:first-child {
            flex: 0 300px;
            ${down("sm")} {
                flex: 1;
            }
        }
    }
    ${down("sm")} {
        flex-direction: column;
    }
`;
const SSetting = styled.div``;
const SSettingTitle = styled.div`
    font-size: ${fonts.fs_body_s};
    font-weight: ${fonts.fw_medium};
    margin-bottom: 5px;
`;
const SSettingList = styled.div`
    display: flex;
    gap: ${spacings.offset_5};
    padding-bottom: 4px;
    flex-wrap: wrap;
`;
const SSettingItem = styled.div`
    color: ${colors.btn_secondary_typo};
    background-color: ${colors.white};
    border-radius: ${global.border_radius_large};
    padding: 5px 10px;
    font-size: ${fonts.fs_body_s};
    transition: all ${global.transition} ease-in-out;
    cursor: pointer;
    &:hover {
        color: ${colors.typo_interactive_secondary};
    }
    &:focus {
        background-color: ${colors.btn_secondary_focus_bg};
        color: ${colors.btn_secondary_focus_typo};
    }
    &.active {
        background-color: ${colors.btn_secondary_active_bg};
        color: ${colors.btn_secondary_active_typo};
        cursor: default;
    }
    &.disabled {
        pointer-events: none;
        color: ${colors.typo_secondary};
    }
`;

export default Quiz;
