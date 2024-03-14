import React from "react";
import CN from "classnames";
import styled from "styled-components";
import { position } from "polished";

import { colors, global, spacings } from "@styles/vars";
import { down } from "@config/breakpoints_vars";

interface Loader {
    type?: "default" | "absolute" | "fixed" | "block" | "inline";
    size?: "small" | "big";
    bg?: boolean;
    margin_top_show?: boolean;
    margin_bottom_show?: boolean;
    style?: "spinner" | "dots";
}

const Loader: React.FC<Loader> = ({
    type = "block",
    size = "small",
    bg = false,
    margin_top_show = false,
    margin_bottom_show = false,
    style = "spinner",
}) => {
    return (
        <SLoader
            className={CN(`${type ? type : ""} ${size ? size : ""} `, {
                bg: bg,
                small_size: size === "small",
                margin_top_show: margin_top_show,
                margin_bottom_show: margin_bottom_show,
            })}
        >
            {style === "spinner" ? <SSpinner /> : <SDots />}
        </SLoader>
    );
};

const SLoader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 3;
    &.absolute {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
    }
    &.fixed {
        position: fixed;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: 100;
    }
    &.block {
        height: 3em;
        width: 100%;
        &.margin_top_show {
            margin-top: ${spacings.offset_20};
            ${down("sm")} {
                margin-top: ${spacings.offset_10};
            }
        }
        &.margin_bottom_show {
            margin-bottom: 3em;
            ${down("sm")} {
                margin-bottom: 1em;
            }
        }
    }
    &.inline {
        display: inline-flex;
        margin-left: 0.5em;
    }
    &.bg {
        background: ${colors?.white};
        border-radius: ${global?.border_radius};
    }
`;

const SSpinner = styled.div`
    position: relative;
    width: 3.2em;
    height: 3.2em;
    border: 0.3em solid ${colors?.bg_dark};
    border-right-color: transparent;
    border-radius: 50%;
    animation: loader 1s linear infinite;
    &:after {
        content: "";
        ${position("absolute", "0.02em", null, null, "2.08em")}
        width: 0.3em;
        height: 0.3em;
        background: ${colors?.bg_interactive};
        position: absolute;
        transform: rotate(40deg);
    }
    ${SLoader}.small_size & {
        font-size: 0.6em;
    }
    @keyframes loader {
        0% {
            transform: rotate(0);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

const SDots = styled.div`
    position: relative;
    width: 1.5em;
    height: 0.5em;
    &:before,
    &:after {
        content: "";
        position: absolute;
        content: "";
        width: 0.5em;
        height: 0.5em;
        background-color: ${colors.bg_interactive};
        border-radius: 50%;
        opacity: 0;
        animation: SDotsLoader 1.2s cubic-bezier(0.2, 0.32, 0, 0.87) infinite;
    }
    &:after {
        animation-delay: 0.3s;
    }
    @keyframes SDotsLoader {
        0%,
        80%,
        100% {
            opacity: 0;
        }
        33% {
            opacity: 1;
        }
        0%,
        100% {
            transform: translateX(-1em);
        }
        90% {
            transform: translateX(1em);
        }
    }
`;

export default Loader;
