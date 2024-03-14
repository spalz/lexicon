import React, { memo } from "react";
import styled from "styled-components";

import { HeaderLogo, HeaderMenu, HeaderMobileMenu } from "@components/header";
import { Container } from "@components/layout";
import { colors, global, spacings } from "@styles/vars";
import { down } from "@config/breakpoints_vars";
import { useProject } from "@context";

interface HeaderProps {
    onClickOpenMenu: () => void;
}

let Header: React.FC<HeaderProps> = ({ onClickOpenMenu }) => {
    const { header } = useProject();
    return (
        <>
            <SHeader className={header ? "header_show" : "header_hide"}>
                <Container full>
                    <SBlock>
                        <HeaderLogo />
                        <HeaderMenu type="desktop" />
                        <SHamburgerMenu onClick={() => onClickOpenMenu()}>
                            <SHamburgerMenuBar />
                        </SHamburgerMenu>
                    </SBlock>
                </Container>
            </SHeader>
            <HeaderMobileMenu />
        </>
    );
};

Header = memo(Header);

const SHeader = styled.header`
    position: relative;
    z-index: ${global.zi_header};
    background-color: ${colors.bg_header_footer};
    border-bottom: 1px solid ${colors.border};
`;

const SBlock = styled.div`
    display: flex;
    align-items: center;
    gap: ${spacings.offset_40};
    justify-content: space-between;
    height: ${global.header_height};
    transition: height ${global.transition};
    overflow: hidden;
    .header_hide & {
        height: 0;
    }
    ${down("sm")} {
        gap: ${spacings.offset_20};
    }
`;

const SHamburgerMenu = styled.div`
    position: relative;
    z-index: 12;
    display: none;
    --hamburger-height: ${global.control_height_s};
    --hamburger-width: calc(${global.control_height_s} + 0.3em);
    font-size: 0.8em;
    width: var(--hamburger-width);
    height: var(--hamburger-height);
    /* background-color: ${colors.bg_grey_200}; */
    ${down("lg")} {
        display: block;
    }
`;

const SHamburgerMenuBar = styled.div`
    width: var(--hamburger-width);
    height: 2px;
    position: relative;
    transform: translateY(calc((var(--hamburger-height) / 2) - 1px));
    background: ${colors.typo_primary};
    transition: all 0ms 250ms;
    .open-menu & {
        background: rgba(255, 255, 255, 0);
    }
    &:before {
        content: "";
        position: absolute;
        left: 0;
        bottom: calc(calc(var(--hamburger-height) / 2) - 1px);
        background: ${colors.typo_primary};
        transition: bottom 250ms 250ms cubic-bezier(0.23, 1, 0.32, 1),
            transform 250ms cubic-bezier(0.23, 1, 0.32, 1);
        .open-menu & {
            bottom: 0;
            transform: rotate(-45deg);
            transition: bottom 250ms cubic-bezier(0.23, 1, 0.32, 1),
                transform 250ms 250ms cubic-bezier(0.23, 1, 0.32, 1);
        }
    }
    &:after {
        content: "";
        position: absolute;
        left: 0;
        top: calc((var(--hamburger-height) / 2) - 1px);
        background: ${colors.typo_primary};
        transition: top 250ms 250ms cubic-bezier(0.23, 1, 0.32, 1),
            transform 250ms cubic-bezier(0.23, 1, 0.32, 1);
        .open-menu & {
            top: 0;
            transform: rotate(45deg);
            transition: top 250ms cubic-bezier(0.23, 1, 0.32, 1),
                transform 250ms 250ms cubic-bezier(0.23, 1, 0.32, 1);
        }
    }

    &:after,
    &:before {
        width: var(--hamburger-width);
        height: 2px;
    }
`;

export default Header;
