import { css } from "styled-components";

import { colors } from "@styles/vars";

export const reset_button_style = {
    display: "contents",
    fontSize: "1em",
};

export const primary = css`
    &.primary {
        background-color: ${colors.btn_primary_bg};
        border-color: ${colors.btn_primary_br};
        color: ${colors.btn_primary_typo};
        @media (hover) {
            &:hover {
                background-color: ${colors.btn_primary_hover_bg};
                border-color: ${colors.btn_primary_hover_br};
                color: ${colors.btn_primary_hover_typo};
            }
        }
        &:focus,
        &:active {
            background-color: ${colors.btn_primary_focus_bg};
            border-color: ${colors.btn_primary_focus_br};
            color: ${colors.btn_primary_focus_typo};
        }
    }
`;

export const secondary = css`
    &.secondary {
        background-color: ${colors.btn_secondary_bg};
        border-color: ${colors.btn_secondary_br};
        color: ${colors.btn_secondary_typo};
        @media (hover) {
            &:hover {
                background-color: ${colors.btn_secondary_hover_bg};
                border-color: ${colors.btn_secondary_hover_br};
                color: ${colors.btn_secondary_hover_typo};
            }
        }
        &:focus,
        &:active {
            background-color: ${colors.btn_secondary_focus_bg};
            border-color: ${colors.btn_secondary_focus_br};
            color: ${colors.btn_secondary_focus_typo};
        }
    }
`;

export const interactive = css`
    &.interactive {
        background-color: ${colors.btn_interactive_bg};
        border-color: ${colors.btn_interactive_br};
        color: ${colors.btn_interactive_typo};
        @media (hover) {
            &:hover {
                background-color: ${colors.btn_interactive_hover_bg};
                border-color: ${colors.btn_interactive_hover_br};
                color: ${colors.btn_interactive_hover_typo};
            }
        }
        &:focus,
        &:active {
            background-color: ${colors.btn_interactive_focus_bg};
            border-color: ${colors.btn_interactive_focus_br};
            color: ${colors.btn_interactive_focus_typo};
        }
    }
`;

export const negative = css`
    &.negative {
        background-color: ${colors.btn_negative_bg};
        border-color: ${colors.btn_negative_br};
        color: ${colors.btn_negative_typo};
        @media (hover) {
            &:hover {
                background-color: ${colors.btn_negative_hover_bg};
                border-color: ${colors.btn_negative_hover_br};
                color: ${colors.btn_negative_hover_typo};
            }
        }
        &:focus,
        &:active {
            background-color: ${colors.btn_negative_focus_bg};
            border-color: ${colors.btn_negative_focus_br};
            color: ${colors.btn_negative_focus_typo};
        }
    }
`;

export const positive = css`
    &.positive {
        background-color: ${colors.btn_positive_bg};
        border-color: ${colors.btn_positive_br};
        color: ${colors.btn_positive_typo};
        @media (hover) {
            &:hover {
                background-color: ${colors.btn_positive_hover_bg};
                border-color: ${colors.btn_positive_hover_br};
                color: ${colors.btn_positive_hover_typo};
            }
        }
        &:focus,
        &:active {
            background-color: ${colors.btn_positive_focus_bg};
            border-color: ${colors.btn_positive_focus_br};
            color: ${colors.btn_positive_focus_typo};
        }
    }
`;
