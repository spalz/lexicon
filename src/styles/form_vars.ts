import { createGlobalStyle } from "styled-components";

export const forms = {
    field_spacing_h: "var(--form-field-spacing-h)",
    field_spacing_v: "var(--form-field-spacing-v)",
    //
    field_font_size: "var(--form-field-fs)",
    field_font_weight: "var(--form-field-fw)",
    field_border_radius: "var(--form-field-br)",
    field_border_width: "var(--form-field-bw)",
};

const FormVarsStyle = createGlobalStyle`
    :root {
        --form-field-spacing-h: 20px;
        --form-field-spacing-v: 16px;
        //
        --form-field-fs: var(--fs-field-l); 
        --form-field-fw: var(--fw-regular);
        --form-field-br: var(--border-radius-large);
        --form-field-bw: var(--border-width);
    }
`;

export default FormVarsStyle;
