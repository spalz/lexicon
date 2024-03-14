import { createGlobalStyle } from "styled-components";

import { down } from "@config/breakpoints_vars";

export const global = {
    border_radius: "var(--border-radius)",
    border_radius_large: "var(--border-radius-large)",
    border_radius_big: "var(--border-radius-big)",
    transition: "var(--transition)",
    border_width: "var(--border-width)",

    //* header
    header_height: "var(--header-height)",

    //* z-index
    zi_header: 20,
    zi_header_mobile: 19,
    zi_scrollbar_track_bg: 17,
    zi_scrollbar_track: 18,
    zi_mobile_filters: 22,
    zi_mobile_filters_header: 23,

    //* controls
    control_height_l: "var(--control-l-height)",
    control_height_m: "var(--control-m-height)",
    control_height_s: "var(--control-s-height)",
};

const GlobalVarsStyle = createGlobalStyle`
    :root {
        --border-radius: 3px;
        --border-radius-large: 8px;
        --border-radius-big: 20px;
        --transition: 0.1s;
        --border-width: 2px;
        
        /* header */
        --header-height: 60px;
        ${down("sm")} {
            /* --header-height: 76px; */
        }

        --control-s-height: 1.8em;
        --control-m-height: 2.6em;
        ${down("sm")} {
            --control-m-height: 2.2em;
        }
        --control-l-height: 58px;
        ${down("sm")} {
        }
    }
`;

export default GlobalVarsStyle;
