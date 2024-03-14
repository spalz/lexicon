import React from "react";
import styled from "styled-components";

import { spacings } from "@styles/vars";
import { up, container } from "@config/breakpoints_vars";

interface ContainerProps {
    children: React.ReactNode;
    small?: boolean;
    full?: boolean;
}

const Container: React.FC<ContainerProps> = ({
    children,
    small = true,
    full = false,
}) => {
    return (
        <SContainer className={`${small ? "small" : ""} ${full ? "full" : ""}`}>
            {children}
        </SContainer>
    );
};

const SContainer = styled.div`
    width: 100%;
    padding-right: ${spacings?.offset_wrapper};
    padding-left: ${spacings?.offset_wrapper};
    margin-right: auto;
    margin-left: auto;
    ${up("sm")} {
        max-width: ${container?.sm}px;
    }
    ${up("md")} {
        max-width: ${container?.md}px;
    }
    ${up("lg")} {
        max-width: ${container?.lg}px;
    }
    ${up("xl")} {
        max-width: ${container?.xl}px;
    }
    ${up("xga")} {
        max-width: ${container?.xga}px;
    }
    &.small {
        max-width: 920px;
    }
    &.full {
        max-width: none;
    }
`;

export default Container;
