import React from "react";
import styled from "styled-components";
import CN from "classnames";

import { AddIcon } from "@components/icons";
import { fonts, colors, global, spacings } from "@styles/vars";

interface QuizProps {
    title: string;
    active: boolean;
    onClick: any;
    disabled?: boolean;
    add?: boolean;
}

const SettingItem: React.FC<QuizProps> = ({
    title,
    active,
    onClick,
    disabled,
    add,
}) => {
    return (
        <SSettingItem
            className={CN({
                active: active,
                disabled: disabled,
            })}
            onClick={onClick}
        >
            {title}
            {add && <AddIcon />}
        </SSettingItem>
    );
};

const SSettingItem = styled.div`
    color: ${colors.btn_secondary_typo};
    background-color: ${colors.white};
    border-radius: ${global.border_radius_large};
    padding: 5px 10px;
    font-size: ${fonts.fs_body_s};
    transition: all ${global.transition} ease-in-out;
    cursor: pointer;
    gap: 4px;
    display: flex;
    align-items: center;
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
        background-color: ${colors.white};
        opacity: 0.5;
    }
    svg {
        width: 0.8em;
    }
`;

export default SettingItem;
