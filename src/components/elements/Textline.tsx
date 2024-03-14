import React from "react";
import CN from "classnames";
import styled from "styled-components";

import { SOffsetStyle } from "@styles/global_style";
import { colors, fonts } from "@styles/vars";
import { offset_types } from "@styles/spacing_vars";

interface TextlineProps {
    size?: "3xl" | "2xl" | "xl" | "l" | "m" | "s" | "xs";
    weight?: "light" | "regular" | "medium" | "bold";
    offset?: Array<offset_types>;
    align?: "left" | "center";
    style?: "primary" | "secondary" | "interactive";
    interactive?: boolean;
    children: React.ReactNode;
}

const Textline: React.FC<TextlineProps> = ({
    size = "m",
    weight = "regular",
    offset = ["bottom-0"],
    align = "left",
    style = "primary",
    interactive = false,
    children,
}) => {
    const Textline_size = `size_${size}`;
    const Textline_weight = `weight_${weight}`;
    const Textline_style = `style_${style}`;
    const offset_list = offset ? offset.join(" ") : "";
    const classnames = CN(
        Textline_size,
        Textline_weight,
        Textline_style,
        align,
        {
            interactive: interactive,
        }
    );
    return (
        <SOffsetStyle className={offset_list}>
            <STextline className={classnames}>{children}</STextline>
        </SOffsetStyle>
    );
};

const STextline = styled.div`
    //* sizes
    &.size_3xl {
        font-size: ${fonts.fs_body_3xl};
    }
    &.size_2xl {
        font-size: ${fonts.fs_body_2xl};
    }
    &.size_xl {
        font-size: ${fonts.fs_body_xl};
    }
    &.size_l {
        font-size: ${fonts.fs_body_l};
    }
    &.size_m {
        font-size: ${fonts.fs_body_m};
    }
    &.size_s {
        font-size: ${fonts.fs_body_s};
    }
    &.size_xs {
        font-size: ${fonts.fs_body_xs};
    }

    //* style
    &.style_primary {
    }
    &.style_secondary {
        color: ${colors.typo_secondary};
    }
    &.style_interactive {
        color: ${colors.typo_interactive};
    }

    //* weight
    &.weight_regular {
        font-weight: ${fonts.fw_regular};
    }
    &.weight_medium {
        font-weight: ${fonts.fw_medium};
    }
    &.weight_bold {
        font-weight: ${fonts.fw_bold};
    }

    //* align
    &.center {
        display: block;
        text-align: center;
    }

    //* interactive
    &.interactive {
        color: ${colors.typo_link};
    }

    span {
        color: ${colors?.typo_secondary};
    }
`;

export default Textline;
