import React from "react";
import styled from "styled-components";

import { BaseButton } from "@components/elements";
import { spacings } from "@styles/vars";
import { down } from "@config/breakpoints_vars";

interface WordsFilterItemProps {
    title: string;
    active: boolean;
    onClick: any;
}

const WordsFilterItem: React.FC<WordsFilterItemProps> = ({
    title,
    active,
    onClick,
}) => {
    return (
        <SFilterItem>
            <BaseButton
                size="small"
                style={active ? "interactive" : "secondary"}
                onClick={onClick}
            >
                {title}
            </BaseButton>
        </SFilterItem>
    );
};

const SFilterItem = styled.div`
    margin-right: ${spacings.offset_5};
    margin-bottom: ${spacings.offset_5};
    ${down("sm")} {
    }
`;

export default WordsFilterItem;
