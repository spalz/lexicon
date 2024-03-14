import React from "react";
import CN from "classnames";
import styled, { css } from "styled-components";

import { colors, fonts } from "@styles/vars";
import { offset_types } from "@styles/spacing_vars";
import { SOffsetStyle } from "@styles/global_style";
import { up } from "@config/breakpoints_vars";

interface Headline {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    size?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    // weight?: "light" | "regular" | "medium" | "bold" | "black";
    offset?: Array<offset_types>;
    children: React.ReactNode;
}

const Headline: React.FC<Headline> = ({
    level = 2,
    size = "h2",
    // weight = "black",
    offset = ["bottom-40"],
    children,
}) => {
    const headline_size = `size_${size}`;
    const offset_list = offset ? offset.join(" ") : "";
    const classnames = CN(headline_size, offset_list);
    return (
        <SOffsetStyle className={offset_list}>
            {level === 1 && <H1 className={classnames}>{children}</H1>}
            {level === 2 && <H2 className={classnames}>{children}</H2>}
            {level === 3 && <H3 className={classnames}>{children}</H3>}
            {level === 4 && <H4 className={classnames}>{children}</H4>}
            {level === 5 && <H5 className={classnames}>{children}</H5>}
            {level === 6 && <H6 className={classnames}>{children}</H6>}
        </SOffsetStyle>
    );
};

const headline_style = css`
    line-height: 1.3;
    margin: 0;
    font-weight: ${fonts.fw_bold};
    &.size_h1 {
        font-size: ${fonts?.fs_h1};
        line-height: 1.2;
    }
    &.size_h2 {
        font-size: ${fonts?.fs_h2};
        line-height: 1.1;
    }
    &.size_h3 {
        font-size: ${fonts?.fs_h3};
        line-height: 1.2;
    }
    &.size_h4 {
        font-size: ${fonts?.fs_h4};
    }
    &.size_h5 {
        font-size: ${fonts?.fs_h5};
    }
    &.size_h6 {
        font-size: ${fonts?.fs_h6};
    }

    //* other
    u {
        text-decoration: none;
        ${up("md")} {
            display: block;
        }
    }
    span {
        color: ${colors.typo_secondary};
        font-size: ${fonts.fs_body_xs};
    }
`;

const H1 = styled.h1`
    ${headline_style};
`;
const H2 = styled.h2`
    ${headline_style};
`;
const H3 = styled.h3`
    ${headline_style};
`;
const H4 = styled.h4`
    ${headline_style};
`;
const H5 = styled.h4`
    ${headline_style};
`;
const H6 = styled.h4`
    ${headline_style};
`;

export default Headline;
