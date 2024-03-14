import { createGlobalStyle } from "styled-components";
import { darken } from "polished";

export const colors = {
    black: "#0a0a0a",
    white: "#fff",
    red: "#EB5757",
    green: "#58CC02",
    interactive: "#58CC02",
    interactive_color_typo: "#fff",
    interactive_secondary: "#1cb0f6",
    interactive_secondary_typo: "#fff",
    //
    body: "var(--border)",
    border: "var(--border)",
    //

    typo_link: "var(--typo-link)",
    typo_link_hover: "var(--typo-link-hover)",
    typo_positive: "var(--typo-positive)",
    typo_negative: "var(--typo-negative)",
    typo_inverse: "var(--typo-inverse)",
    typo_placeholder: "var(--typo-placeholder)",
    typo_primary: "var(--typo-primary)",
    typo_secondary: "var(--typo-secondary)",
    typo_interactive: "var(--typo-interactive)",
    typo_interactive_secondary: "var(--typo-interactive-secondary)",

    bg_body: "var(--bg-body)",
    bg_header_footer: "var(--bg-header-footer)",
    bg_light: "var(--bg-light)",
    bg_dark: "var(--bg-dark)",
    bg_grey: "var(--bg-grey)",
    bg_grey_200: "var(--bg-grey-200)",

    bg_warning_light: "var(--bg-warning-light)",
    bg_danger_light: "var(--bg-danger-light)",
    bg_success_light: "var(--bg-success-light)",
    bg_neutral_light: "var(--bg-neutral-light)",
    bg_success: "var(--bg-success)",
    bg_alert: "var(--bg-alert)",
    bg_interactive: "var(--bg-interactive)",
    bg_skeleton: "var(--bg-skeleton)",

    btn_primary_bg: "var(--btn-primary-bg)",
    btn_primary_br: "var(--btn-primary-br)",
    btn_primary_typo: "var(--btn-primary-typo)",
    btn_primary_hover_bg: "var(--btn-primary-hover-bg)",
    btn_primary_hover_br: "var(--btn-primary-hover-br)",
    btn_primary_hover_typo: "var(--btn-primary-hover-typo)",
    btn_primary_focus_bg: "var(--btn-primary-focus-bg)",
    btn_primary_focus_br: "var(--btn-primary-focus-br)",
    btn_primary_focus_typo: "var(--btn-primary-focus-typo)",
    btn_primary_active_bg: "var(--btn-primary-active-bg)",
    btn_primary_active_br: "var(--btn-primary-active-br)",
    btn_primary_active_typo: "var(--btn-primary-active-typo)",
    //
    btn_secondary_bg: "var(--btn-secondary-bg)",
    btn_secondary_br: "var(--btn-secondary-br)",
    btn_secondary_typo: "var(--btn-secondary-typo)",
    btn_secondary_hover_bg: "var(--btn-secondary-hover-bg)",
    btn_secondary_hover_br: "var(--btn-secondary-hover-br)",
    btn_secondary_hover_typo: "var(--btn-secondary-hover-typo)",
    btn_secondary_focus_bg: "var(--btn-secondary-focus-bg)",
    btn_secondary_focus_br: "var(--btn-secondary-focus-br)",
    btn_secondary_focus_typo: "var(--btn-secondary-focus-typo)",
    btn_secondary_active_bg: "var(--btn-secondary-active-bg)",
    btn_secondary_active_br: "var(--btn-secondary-active-br)",
    btn_secondary_active_typo: "var(--btn-secondary-active-typo)",
    //
    btn_interactive_bg: "var(--btn-interactive-bg)",
    btn_interactive_br: "var(--btn-interactive-br)",
    btn_interactive_typo: "var(--btn-interactive-typo)",
    btn_interactive_hover_bg: "var(--btn-interactive-hover-bg)",
    btn_interactive_hover_br: "var(--btn-interactive-hover-br)",
    btn_interactive_hover_typo: "var(--btn-interactive-hover-typo)",
    btn_interactive_focus_bg: "var(--btn-interactive-focus-bg)",
    btn_interactive_focus_br: "var(--btn-interactive-focus-br)",
    btn_interactive_focus_typo: "var(--btn-interactive-focus-typo)",
    btn_interactive_active_bg: "var(--btn-interactive-active-bg)",
    btn_interactive_active_br: "var(--btn-interactive-active-br)",
    btn_interactive_active_typo: "var(--btn-interactive-active-typo)",
    //
    btn_negative_bg: "var(--btn-negative-bg)",
    btn_negative_br: "var(--btn-negative-br)",
    btn_negative_typo: "var(--btn-negative-typo)",
    btn_negative_hover_bg: "var(--btn-negative-hover-bg)",
    btn_negative_hover_br: "var(--btn-negative-hover-br)",
    btn_negative_hover_typo: "var(--btn-negative-hover-typo)",
    btn_negative_focus_bg: "var(--btn-negative-focus-bg)",
    btn_negative_focus_br: "var(--btn-negative-focus-br)",
    btn_negative_focus_typo: "var(--btn-negative-focus-typo)",
    btn_negative_active_bg: "var(--btn-negative-active-bg)",
    btn_negative_active_br: "var(--btn-negative-active-br)",
    btn_negative_active_typo: "var(--btn-negative-active-typo)",
    //
    btn_positive_bg: "var(--btn-positive-bg)",
    btn_positive_br: "var(--btn-positive-br)",
    btn_positive_typo: "var(--btn-positive-typo)",
    btn_positive_hover_bg: "var(--btn-positive-hover-bg)",
    btn_positive_hover_br: "var(--btn-positive-hover-br)",
    btn_positive_hover_typo: "var(--btn-positive-hover-typo)",
    btn_positive_focus_bg: "var(--btn-positive-focus-bg)",
    btn_positive_focus_br: "var(--btn-positive-focus-br)",
    btn_positive_focus_typo: "var(--btn-positive-focus-typo)",
    btn_positive_active_bg: "var(--btn-positive-active-bg)",
    btn_positive_active_br: "var(--btn-positive-active-br)",
    btn_positive_active_typo: "var(--btn-positive-active-typo)",

    form_base_bg: "var(--form-base-bg)",
    form_base_br: "var(--form-base-border)",
    form_base_typo: "var(--form-base-typo)",
    //
    form_hover_bg: "var(--form-hover-bg)",
    form_hover_br: "var(--form-hover-border)",
    form_hover_typo: "var(--form-hover-typo)",
    //
    form_focus_bg: "var(--form-focus-bg)",
    form_focus_br: "var(--form-focus-border)",
    form_focus_typo: "var(--form-focus-typo)",
    //
    form_disabled_bg: "var(--form-disabled-bg)",
    form_disabled_br: "var(--form-disabled-border)",
    form_disabled_typo: "var(--form-disabled-typo)",
    //
    form_positive_bg: "var(--form-positive-bg)",
    form_positive_br: "var(--form-positive-border)",
    form_positive_typo: "var(--form-positive-typo)",
    //
    form_negative_bg: "var(--form-negative-bg)",
    form_negative_br: "var(--form-negative-border)",
    form_negative_typo: "var(--form-negative-typo)",
    //
    form_text_typo: "var(--form-text-typo)",
    form_placeholder_typo: "var(--form-placeholder-typo)",
};

const ThemeVarsStyle = createGlobalStyle`
    :root {
        --border: #e9e9e9;
        // *
        // * typo
        // *
        --typo-link: ${colors.interactive_secondary};
        --typo-link-hover: ${darken(0.1, colors.interactive)};
        --typo-positive: ${colors.green};
        --typo-negative: #EB5757;
        --typo-inverse: ${colors.white};
        --typo-placeholder: #dcdcdc;
        --typo-primary: ${colors.black};
        --typo-secondary: #727272;
        --typo-interactive: ${colors.interactive};
        --typo-interactive-secondary: ${colors.interactive_secondary};
        // *
        // * bg
        // *

        --bg-body: #fff;
        --bg-header-footer: #fff;
        --bg-light: ${colors.white};
        --bg-dark: #101010;
        --bg-grey: #E7E7E7;
        --bg-grey-200: #f0f0f0;
        --bg-warning-light: #F5EEDC;
        --bg-danger-light: #ECD7E3;
        --bg-success-light: #EBF3DA;
        --bg-neutral-light: #EFF0F1;
        --bg-success: ${colors.green};
        --bg-alert: #EB5757;
        --bg-interactive: ${colors.interactive};
        --bg-skeleton: #E7E7E7;
        // *
        // * btn
        // *
        --btn-primary-bg: #272727;
        --btn-primary-br: #272727;
        --btn-primary-typo: #FFFFFF;
        --btn-primary-hover-bg: ${darken(0.2, "#272727")};
        --btn-primary-hover-br: ${darken(0.2, "#272727")};
        --btn-primary-hover-typo: #FFFFFF;
        --btn-primary-focus-bg: ${darken(0.2, "#272727")};
        --btn-primary-focus-br: ${colors.interactive_secondary};
        --btn-primary-focus-typo: #FFFFFF;
        --btn-primary-active-bg: ${darken(0.2, "#272727")};
        --btn-primary-active-br: ${colors.interactive_secondary};
        --btn-primary-active-typo: #FFFFFF;
        //
        --btn-secondary-bg: #e6e6e6;
        --btn-secondary-br: #e6e6e6;
        --btn-secondary-typo: #1b1b1b;
        --btn-secondary-hover-bg: ${darken(0.07, "#e6e6e6")};
        --btn-secondary-hover-br: ${darken(0.07, "#e6e6e6")};
        --btn-secondary-hover-typo: #1b1b1b;
        --btn-secondary-focus-bg: ${darken(0.1, "#e6e6e6")};
        --btn-secondary-focus-br: ${colors.interactive_secondary};
        --btn-secondary-focus-typo: #1b1b1b;
        --btn-secondary-active-bg: ${colors.interactive_secondary};
        --btn-secondary-active-br: ${colors.interactive_secondary};
        --btn-secondary-active-typo: #fff;
        //
        --btn-interactive-bg: ${colors.interactive_secondary};
        --btn-interactive-br: ${colors.interactive_secondary};
        --btn-interactive-typo: #fff;
        --btn-interactive-hover-bg: ${darken(0.1, colors.interactive_secondary)};
        --btn-interactive-hover-br: ${darken(0.1, colors.interactive_secondary)};
        --btn-interactive-hover-typo: #fff;
        --btn-interactive-focus-bg: ${darken(0.1, colors.interactive_secondary)};
        --btn-interactive-focus-br: ${colors.interactive_secondary};
        --btn-interactive-focus-typo: #fff;
        --btn-interactive-active-bg: ${darken(0.1, colors.interactive_secondary)};
        --btn-interactive-active-br: ${colors.interactive_secondary};
        --btn-interactive-active-typo: #fff;
        //
        --btn-negative-bg: ${colors.red};
        --btn-negative-br: ${colors.red};
        --btn-negative-typo: #fff;
        --btn-negative-hover-bg: ${darken(0.1, colors.red)};
        --btn-negative-hover-br: ${darken(0.1, colors.red)};
        --btn-negative-hover-typo: #fff;
        --btn-negative-focus-bg: ${darken(0.1, colors.red)};
        --btn-negative-focus-br: ${colors.red};
        --btn-negative-focus-typo: #fff;
        --btn-negative-active-bg: ${darken(0.1, colors.red)};
        --btn-negative-active-br: ${colors.red};
        --btn-negative-active-typo: #fff;
        //
        --btn-positive-bg: ${colors.green};
        --btn-positive-br: ${colors.green};
        --btn-positive-typo: #fff;
        --btn-positive-hover-bg: ${darken(0.1, colors.green)};
        --btn-positive-hover-br: ${darken(0.1, colors.green)};
        --btn-positive-hover-typo: #fff;
        --btn-positive-focus-bg: ${darken(0.1, colors.green)};
        --btn-positive-focus-br: ${colors.green};
        --btn-positive-focus-typo: #fff;
        --btn-positive-active-bg: ${darken(0.1, colors.green)};
        --btn-positive-active-br: ${colors.green};
        --btn-positive-active-typo: #fff;
        // *
        // * form
        // *
        --form-base-bg: transparent;
        --form-base-border: ${colors.border};
        --form-base-typo: #1b1b1b;
        //
        --form-hover-bg: #ececec;
        --form-hover-border: #1b1b1b;
        --form-hover-typo: #0a0a0a;
        //
        --form-focus-bg: ${colors.bg_grey};
        --form-focus-border: ${colors.interactive};
        --form-focus-typo: ${colors.typo_primary};
        //
        --form-disabled-bg: #CCCCCC;
        --form-disabled-border: #CCCCCC;
        --form-disabled-typo: #ADADAD;
        //
        --form-positive-bg: #5B8B6C;
        --form-positive-border: #5B8B6C;
        --form-positive-typo: #FFFFFF;
        //
        --form-negative-bg: #EB5757;
        --form-negative-border: #EB5757;
        --form-negative-typo: #FFFFFF;
        //
        --form-text-typo: ${colors.typo_primary};
        --form-placeholder-typo: ${colors.typo_placeholder};
    }
`;

export default ThemeVarsStyle;
