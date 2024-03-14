import React, { memo } from "react";
import styled from "styled-components";

import { HeaderMenu } from "./";
import { global, colors, spacings, fonts } from "@styles/vars";
import { up } from "@config/breakpoints_vars";

interface HeaderMobileMenuProps {}

let HeaderMobileMenu: React.FC<HeaderMobileMenuProps> = () => {
    return (
        <SHeaderMobileMenu>
            <SBlock>
                <HeaderMenu type="mobile" />
            </SBlock>
        </SHeaderMobileMenu>
    );
};

HeaderMobileMenu = memo(HeaderMobileMenu);

const SHeaderMobileMenu = styled.div`
    position: fixed;
    top: 80px;
    width: 100vw;
    height: 100%;
    transition: all ${global.transition} ease;
    right: 0;
    list-style-type: none;
    visibility: hidden;
    z-index: ${global.zi_header_mobile};
    padding: ${global.header_height} 0 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    opacity: 0;
    &:before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: ${colors.bg_body};
        opacity: 0.99;
    }
    .open-menu & {
        animation: display 0.5s cubic-bezier(0.55, 0, 0.1, 1) forwards;
        opacity: 1;
        visibility: visible;
        top: 0;
    }
    @keyframes display {
        from {
            transform: scale(0.9);
            opacity: 0;
        }
        to {
            transform: scale(1);
            opacity: 1;
        }
    }
    ${up("xl")} {
        display: none;
    }
`;

const SBlock = styled.div`
    position: relative;
    z-index: 2;
    padding: ${spacings.offset_40} ${spacings.offset_wrapper};
    text-align: right;
    font-size: ${fonts.fs_body_2xl};
`;

export default HeaderMobileMenu;
