import { createGlobalStyle } from "styled-components";

import { down } from "@config/breakpoints_vars";

const FontsVarsStyle = createGlobalStyle`
    :root {
        --ff-base: 'text', sans-serif;
        /* ------------------ */
        --fw-regular: 300;
        --fw-regular: 400;
        --fw-medium: 500;
        --fw-bold: 600;
        /* ------------------ */
        --fs-h1: 2.8em;
        --fs-h2: 1.9em;
        --fs-h3: 1.65em;
        --fs-h4: 1.29em;
        --fs-h5: 1.12em;
        --fs-h6: 1em;
        ${down("sm")} {
            --fs-h1: 1.8em;
            --fs-h2: 1.4em;
            --fs-h3: 1.2em;
            --fs-h4: 1.1em;
            --fs-h5: 1em;
            --fs-h6: 1em;
        }
        ${down("xs")} {
        }
        //
        --fs-body-3xl: 1.8em;
        --fs-body-2xl: 1.5em;
        --fs-body-xl: 1.2em;
        --fs-body-l: 1.1em;
        --fs-body-m: 1em;
        --fs-body-m-max: 0.9rem;
        --fs-body-s: 0.9em;
        --fs-body-xs: 0.8em;
        ${down("sm")} {
            --fs-body-3xl: 1.4em;
            --fs-body-2xl: 1.2em;
            --fs-body-xl: 1.2em;
            --fs-body-l: 1.1em;
            --fs-body-m: 1em;
            --fs-body-m-max: 0.9rem;
            --fs-body-s: 0.9em;
            --fs-body-xs: 0.7em;
        }
        //
        --fs-button-l: 1.1em;
        --fs-button-m: 1em;
        --fs-button-s: 0.9em;
        ${down("sm")} {
        }
        //
        --fs-field-l: 1.1em;
        --fs-field-m: 1em;
        --fs-field-s: 0.9em;
        //
        --fs-label-l: 1.1em;
        --fs-label-m: 1em;
        --fs-label-s: 0.9em;
        ${down("sm")} {
            --fs-label-l: 1em;
            --fs-label-m: 0.9em;
            --fs-label-s: 0.85em;
        }

    }
`;

export const fonts = {
    ff_base: "var(--ff-base)",
    /* ------------------ */
    fw_regular: "var(--fw-regular)",
    fw_medium: "var(--fw-medium)",
    fw_bold: "var(--fw-bold)",
    /* ------------------ */
    fs_h1: "var(--fs-h1)",
    fs_h2: "var(--fs-h2)",
    fs_h3: "var(--fs-h3)",
    fs_h4: "var(--fs-h4)",
    fs_h5: "var(--fs-h5)",
    fs_h6: "var(--fs-h6)",
    //
    fs_body_3xl: "var(--fs-body-3xl)",
    fs_body_2xl: "var(--fs-body-2xl)",
    fs_body_xl: "var(--fs-body-xl)",
    fs_body_l: "var(--fs-body-l)",
    fs_body_m: "var(--fs-body-m)",
    fs_body_m_max: "var(--fs-body-m-max)",
    fs_body_s: "var(--fs-body-s)",
    fs_body_xs: "var(--fs-body-xs)",
    //
    fs_button_l: "var(--fs-button-l)",
    fs_button_m: "var(--fs-button-m)",
    fs_button_s: "var(--fs-button-s)",
    //
    fs_field_l: "var(--fs-field-l)",
    fs_field_m: "var(--fs-field-m)",
    fs_field_s: "var(--fs-field-s)",
    //
    fs_label_l: "var(--fs-label-l)",
    fs_label_m: "var(--fs-label-m)",
    fs_label_s: "var(--fs-label-s)",
};

export default FontsVarsStyle;
