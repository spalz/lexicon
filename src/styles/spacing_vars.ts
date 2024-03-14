import { createGlobalStyle } from "styled-components";

import { down, up } from "@config/breakpoints_vars";

export type offset_types = "top-120" | "bottom-120" | "top-80" | "bottom-80" | "top-40" | "bottom-40" | "top-20" | "bottom-20" | "top-10" | "bottom-10" | "top-5" | "bottom-5" | "top-0" | "bottom-0";

export const spacings = {
    offset_wrapper: "var(--offset-wrapper)",
    offset_wrapper_minus: "var(--offset-wrapper-minus)",

    offset_120: "var(--offset-120)",
    offset_80: "var(--offset-80)",
    offset_40: "var(--offset-40)",
    offset_20: "var(--offset-20)",
    offset_10: "var(--offset-10)",
    offset_5: "var(--offset-5)",

    offset_card_h: "var(--offset-card-h)",
    offset_card_v: "var(--offset-card-v)",
};

const SpacingVarsStyle = createGlobalStyle`
    :root {
        --offset-wrapper: 60px;
        --offset-wrapper-minus: -60px;
        ${up("xl")} {
            --offset-120: 150px;
            --offset-80: 80px;
            --offset-40: 50px;
            --offset-20: 25px;
            --offset-10: 0.8em;
            --offset-5: 0.5em;
        }
        ${down("xl")} {
            --offset-120: 120px;
            --offset-80: 60px;
            --offset-40: 40px;
            --offset-20: 20px;
            --offset-10: 10px;
            --offset-5: 5px;
        }
        ${down("lg")} {
        }
        ${down("sm")} {
            --offset-wrapper: 8.76vw;
            --offset-wrapper-minus: -8.76vw;
            --offset-120: 17.5vw;
            --offset-80: 8.76vw;
            --offset-40: 6.76vw;
            --offset-20: 4.76vw;
            --offset-10: 3.1vw;
            --offset-5: 2vw;
        }
        ${down("es")} {
            --offset-wrapper: 4.76vw;
            --offset-wrapper-minus: -4.76vw;
        }

        --offset-card-h: 40px;
        --offset-card-v: 35px;
        ${down("lg")} {
            --offset-card-h: 30px;
            --offset-card-v: 25px;
        }
        ${down("md")} {
            --offset-card-h: 20px;
            --offset-card-v: 20px;
        }
    }
`;

export default SpacingVarsStyle;
