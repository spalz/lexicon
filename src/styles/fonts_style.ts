import { createGlobalStyle } from "styled-components";

const FontsStyle = createGlobalStyle`
    @font-face {
        font-family: text;
        src: url("/fonts/text_300.woff2") format("woff2"), url("/fonts/text_300.woff") format("woff");
        font-weight: 300;
        font-display: swap;
    }
    @font-face {
        font-family: text;
        src: url("/fonts/text_400.woff2") format("woff2"), url("/fonts/text_400.woff") format("woff");
        font-display: swap;
    }
    @font-face {
        font-family: text;
        src: url("/fonts/text_500.woff2") format("woff2"), url("/fonts/text_500.woff") format("woff");
        font-weight: 500;
        font-display: swap;
    }
    @font-face {
        font-family: text;
        src: url("/fonts/text_600.woff2") format("woff2"), url("/fonts/text_600.woff") format("woff");
        font-weight: 600;
        font-display: swap;
    }
    @font-face {
        font-family: display;
        src: url("/fonts/text_300.woff2") format("woff2"), url("/fonts/text_300.woff") format("woff");
        font-weight: 300;
        font-display: swap;
    }
    @font-face {
        font-family: display;
        src: url("/fonts/text_400.woff2") format("woff2"), url("/fonts/text_400.woff") format("woff");
        font-display: swap;
    }
    @font-face {
        font-family: display;
        src: url("/fonts/text_500.woff2") format("woff2"), url("/fonts/text_500.woff") format("woff");
        font-weight: 500;
        font-display: swap;
    }
    @font-face {
        font-family: display;
        src: url("/fonts/text_600.woff2") format("woff2"), url("/fonts/text_600.woff") format("woff");
        font-weight: 600;
        font-display: swap;
    }
`;

export default FontsStyle;
