import React, { memo } from "react";
import styled from "styled-components";
import { UrlObject } from "url";
declare type Url = string | UrlObject;

import { Link } from "@components/elements";
import { colors, spacings, fonts } from "@styles/vars";
import { down } from "@config/breakpoints_vars";
import { MAIN_R, WORDS_R, VERBS_R, VERBS_BOOK_R } from "@utils/routes";

interface HeaderMenuItemProps {
    title: string;
    href: Url;
}

const HeaderMenuItem: React.FC<HeaderMenuItemProps> = ({ title, href }) => {
    return (
        <li>
            <Link href={href}>
                <a>{title}</a>
            </Link>
        </li>
    );
};

interface HeaderMenuProps {
    type: "desktop" | "mobile";
}

let HeaderMenu: React.FC<HeaderMenuProps> = ({ type }) => {
    return (
        <SHeaderMenu className={type}>
            {/* <HeaderMenuItem href={MAIN_R()} title={"Quiz"} /> */}
            <HeaderMenuItem href={VERBS_R()} title={"Irregular verbs"} />
            <HeaderMenuItem
                href={VERBS_BOOK_R()}
                title={"Irregular verbs book"}
            />
            {/* <HeaderMenuItem href={WORDS_R()} title={"Words"} /> */}
        </SHeaderMenu>
    );
};

HeaderMenu = memo(HeaderMenu);

const SHeaderMenu = styled.ul`
    display: flex;
    ${down("lg")} {
        flex-direction: column;
        gap: ${spacings.offset_10};
    }
    &.desktop {
        ${down("lg")} {
            display: none;
        }
    }
    li {
        a {
            margin-right: ${spacings.offset_20};
            font-size: ${fonts.fs_body_m};
            color: ${colors.typo_secondary};
            &.active {
                color: ${colors.typo_link_hover};
            }
        }
    }
`;

export default HeaderMenu;
