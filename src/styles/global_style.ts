import styled, { createGlobalStyle } from "styled-components";

import { colors, fonts, global, spacings } from "@styles/vars";
import { down, up } from "@config/breakpoints_vars";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        outline: none !important;
        min-height: 0;
        min-width: 0;
    }
    html {
        height: 100%;
    }
    body {
        font-family: ${fonts?.ff_base};
        color: ${colors?.typo_primary};
        background-color: ${colors?.bg_body};
        line-height: 1.5;
        overflow-y: scroll;
        font-size: 17px;
        margin: 0;
        ${up("xga")} {
        }
    }
    a {
        text-decoration: none;
        transition: color ${global?.transition};
        cursor: pointer;
        color: ${colors?.typo_link};
        @media (hover) {
            &:hover {
                color: ${colors?.typo_link_hover};
            }
        }
        &:focus,
        &:active {
            color: ${colors?.typo_link_hover};
        }
        &.active {
            cursor: default;
        }
    }
    input:focus {
        outline: none !important;
    }
    b {
        font-weight: ${fonts?.fw_bold};
    }
    svg {
        display: block;
    }
    i {
        font-style: normal;
        &:after {
            content: ", ";
        }
        &:last-child {
            &:after {
                content: "";
            }
        }
    }
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
`;

export const SOffsetStyle = styled.div`
    &.top-120 {
        padding-top: ${spacings?.offset_120};
    }
    &.bottom-120 {
        padding-bottom: ${spacings?.offset_120};
    }
    &.top-80 {
        padding-top: ${spacings?.offset_80};
    }
    &.bottom-80 {
        padding-bottom: ${spacings?.offset_80};
    }
    &.top-40 {
        padding-top: ${spacings?.offset_40};
    }
    &.bottom-40 {
        padding-bottom: ${spacings?.offset_40};
    }
    &.top-20 {
        padding-top: ${spacings?.offset_20};
    }
    &.bottom-20 {
        padding-bottom: ${spacings?.offset_20};
    }
    &.top-10 {
        padding-top: ${spacings?.offset_10};
    }
    &.bottom-10 {
        padding-bottom: ${spacings?.offset_10};
    }
    &.top-5 {
        padding-top: ${spacings?.offset_5};
    }
    &.bottom-5 {
        padding-bottom: ${spacings?.offset_5};
    }
    &.top-0 {
        padding-top: 0;
    }
    &.bottom-0 {
        padding-bottom: 0;
    }
`;

export default GlobalStyle;
