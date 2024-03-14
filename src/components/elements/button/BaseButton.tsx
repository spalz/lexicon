import React from "react";
import CN from "classnames";
import styled from "styled-components";

import { Loader } from "@components/elements";
import {
    primary,
    secondary,
    interactive,
    negative,
    positive,
} from "./button_styles";
import { down } from "@config/breakpoints_vars";
import { colors, fonts, global, spacings } from "@styles/vars";

export interface BaseButtonProps {
    style?: "primary" | "secondary" | "interactive" | "negative" | "positive";
    size?: "small" | "medium" | "large";
    block?: boolean;
    disabled?: boolean;
    loading?: boolean;
    left_icon?: React.ReactNode;
    right_icon?: React.ReactNode;
    children?: React.ReactNode;
    onClick?: () => void;
    tabIndex?: number;
}

const BaseButton: React.FC<BaseButtonProps> = ({
    style = "primary",
    size = "medium",
    disabled = false,
    loading = false,
    left_icon,
    right_icon,
    children,
    onClick,
    block = false,
    tabIndex,
}) => {
    return (
        <SBaseButton
            onClick={onClick}
            tabIndex={tabIndex}
            className={CN(`button button__${size} ${style}`, {
                disabled: disabled,
                loading: loading,
                block: block,
            })}
        >
            <SInfo>
                {left_icon ? <SIcon>{left_icon}</SIcon> : null}
                <SText>{children}</SText>
                {right_icon ? <SIcon>{right_icon}</SIcon> : null}
            </SInfo>
            {loading ? <Loader type="absolute" size="small" /> : null}
        </SBaseButton>
    );
};

const SBaseButton = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: none;
    border-style: solid;
    position: relative;
    transition: all ${global?.transition};
    font-family: ${fonts?.ff_base};
    border-width: ${global?.border_width};
    border-radius: ${global?.border_radius_large};
    font-weight: ${fonts?.fw_medium};
    &.block {
        display: flex;
        width: 100%;
    }
    ////////////////////
    &.button__large {
        height: ${global?.control_height_l};
        padding: 0 1.2em;
        font-size: ${fonts?.fs_button_l};
        ${down("sm")} {
        }
    }
    &.button__medium {
        height: ${global?.control_height_m};
        padding: 0 1em;
        font-size: ${fonts?.fs_button_m};
        ${down("sm")} {
        }
    }
    &.button__small {
        height: ${global?.control_height_s};
        padding: 0 0.5em;
        font-size: ${fonts?.fs_button_s};
        ${down("sm")} {
        }
    }
    ${primary};
    ${secondary};
    ${interactive};
    ${negative};
    ${positive};
    ////////////////////
    &.disabled,
    &.loading {
        pointer-events: none;
        background-color: ${colors?.bg_grey};
        border-color: ${colors?.bg_grey};
        color: ${colors?.typo_secondary};
    }
`;

const SInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;
    gap: ${spacings.offset_5};
    ${SBaseButton}.loading & {
        opacity: 0;
    }
`;
const SIcon = styled.div`
    svg {
        width: auto;
        height: 1.4em;
        .button__large & {
        }
        .button__medium & {
        }
        .button__small & {
            width: auto;
            height: 1em;
        }
    }
`;
const SText = styled.div`
    white-space: nowrap;
`;

export default BaseButton;
