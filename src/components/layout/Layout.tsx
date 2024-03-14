import React, { useState, memo } from "react";
import styled from "styled-components";
import CN from "classnames";

import { spacings, colors } from "@styles/vars";

interface Layout {
    children: React.ReactNode;
    padding?: boolean;
}

let Layout: React.FC<Layout> = ({ children, padding = true }) => {
    return (
        <SLayout
            className={CN(`layout`, {
                padding: padding,
            })}
        >
            {children}
        </SLayout>
    );
};

Layout = memo(Layout);

const SLayout = styled.div`
    color: ${colors?.typo_primary};
    background-color: ${colors?.bg_body};
    &.padding {
        padding: ${spacings?.offset_80} 0 ${spacings?.offset_120};
    }
`;

export default Layout;
