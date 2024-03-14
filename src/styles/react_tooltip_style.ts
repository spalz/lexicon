import { createGlobalStyle } from "styled-components";

import { colors, fonts, global, spacings } from "@styles/vars";

const ReactTooltipStyle = createGlobalStyle`
  .styles-module_tooltip__mnnfp {
    visibility: hidden;
    width: max-content;
    position: absolute;
    top: 0;
    left: 0;
    padding: 8px 16px;
    border-radius: ${global.border_radius_large};
    font-size: ${fonts.fs_body_m};
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s ease-out;
    will-change: opacity, visibility;
  }

  .styles-module_fixed__7ciUi {
    position: fixed;
  }

  .styles-module_arrow__K0L3T {
    position: absolute;
    background: inherit;
    width: 8px;
    height: 8px;
    transform: rotate(45deg);
  }

  .styles-module_no-arrow__KcFZN {
    display: none;
  }

  .styles-module_clickable__Bv9o7 {
    pointer-events: auto;
  }

  .styles-module_show__2NboJ {
    visibility: visible;
    opacity: 0.9;
  }

  /** Types variant **/
  .styles-module_dark__xNqje {
    background: ${colors.bg_dark};
    color: ${colors.typo_inverse};
  }

  .styles-module_light__Z6W-X {
    background-color: ${colors.typo_inverse};
    color: ${colors.bg_danger_light};
  }

  .styles-module_success__A2AKt {
    background-color: ${colors.bg_success};
    color: ${colors.typo_inverse};
  }

  .styles-module_warning__SCK0X {
    background-color: ${colors.bg_warning_light};
    color: ${colors.typo_inverse};
  }

  .styles-module_error__JvumD {
    background-color: ${colors.bg_interactive};
    color: ${colors.typo_inverse};
  }

  .styles-module_info__BWdHW {
    background-color: ${colors.bg_interactive};
    color: ${colors.typo_inverse};
  }
`;

export default ReactTooltipStyle;
