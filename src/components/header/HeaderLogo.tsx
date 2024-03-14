import React from "react";
import styled from "styled-components";

import { Link } from "@components/elements";
import { down } from "@config/breakpoints_vars";
import { colors, fonts } from "@styles/vars";
import { MAIN_R } from "@utils/routes";

const HeaderLogo = () => {
    return (
        <SHeaderLogo>
            <Link href="/">
                <a href={MAIN_R()}>
                    {" "}
                    <svg
                        viewBox="0 0 434 108"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M81 60C81 40.67 96.67 25 116 25H207H233.5H399C418.33 25 434 40.67 434 60V73C434 92.33 418.33 108 399 108H116C96.67 108 81 92.33 81 73V60Z"
                            fill="url(#paint0_linear_4_60)"
                        />
                        <path
                            d="M220.25 0C212.932 0 207 5.93223 207 13.25V25H233.5V13.25C233.5 5.93223 227.568 0 220.25 0V0Z"
                            fill="url(#paint1_linear_4_60)"
                        />
                        <path
                            d="M141 71.51C142.105 71.51 143 70.6145 143 69.51V60.6692C142.916 52.0554 140.245 45.2904 134.988 40.3743C129.815 35.5421 123.486 33.084 116 33C112.888 33 109.734 33.5673 106.537 34.7018C103.299 35.8363 100.376 37.6851 97.7687 40.2482C95.2033 42.7693 93.1005 46.2148 91.4603 50.5848C89.8201 54.8706 89 60.249 89 66.7199C89 73.4428 89.9463 78.9052 91.8388 83.1071C93.5631 87.477 95.8131 90.8805 98.5888 93.3176C100.019 94.4941 101.554 95.4815 103.194 96.2799C104.75 97.2043 106.348 97.9396 107.988 98.4859C111.269 99.4943 114.633 99.9985 118.082 99.9985C126.47 100.076 133.845 97.0446 140.206 90.903C141.027 90.1107 140.95 88.7909 140.083 88.0505L133.562 82.4846C132.765 81.8049 131.585 81.8623 130.798 82.5528C126.929 85.9477 122.607 87.6451 117.829 87.6451C113.245 87.6451 109.544 86.2585 106.727 83.4853C104.095 81.1117 102.607 77.7861 102.262 73.5085C102.174 72.4075 103.08 71.51 104.185 71.51H141ZM104.286 60.6692C103.143 60.6692 102.223 59.7097 102.36 58.5744C102.848 54.5161 104.157 51.3696 106.285 49.1351C108.808 46.656 112.047 45.4165 116 45.4165C119.953 45.4165 123.192 46.656 125.715 49.1351C127.921 51.3755 129.241 54.5326 129.674 58.6064C129.794 59.7305 128.879 60.6692 127.748 60.6692H104.286Z"
                            fill={colors.bg_dark}
                        />
                        <path
                            d="M167.814 64.7266C168.222 65.3768 168.222 66.2031 167.813 66.8531L148.924 96.9365C148.087 98.2684 149.045 100 150.617 100H160.994C161.697 100 162.348 99.6307 162.71 99.0274L173.788 80.5259C174.564 79.2307 176.44 79.2288 177.218 80.5225L188.35 99.0309C188.712 99.6322 189.362 100 190.064 100H200.388C201.96 100 202.917 98.2706 202.083 96.9386L183.245 66.8525C182.838 66.2027 182.838 65.3775 183.246 64.7281L201.231 36.0629C202.067 34.731 201.109 33 199.537 33H189.18C188.466 33 187.805 33.3811 187.448 33.9998L177.236 51.6818C176.465 53.0164 174.538 53.0144 173.77 51.6782L163.612 34.0034C163.255 33.3827 162.594 33 161.878 33H151.524C149.951 33 148.994 34.731 149.829 36.063L167.814 64.7266Z"
                            fill={colors.bg_dark}
                        />
                        <path
                            d="M213 98C213 99.1046 213.895 100 215 100H225C226.105 100 227 99.1046 227 98V35C227 33.8954 226.105 33 225 33H215C213.895 33 213 33.8954 213 35V98Z"
                            fill={colors.bg_dark}
                        />
                        <path
                            d="M213 14C213 17.866 216.134 21 220 21V21C223.866 21 227 17.866 227 14V14C227 10.134 223.866 7 220 7V7C216.134 7 213 10.134 213 14V14Z"
                            fill={colors.bg_dark}
                        />
                        <path
                            d="M282.763 81.4369C281.89 80.6716 280.558 80.8181 279.761 81.6621C276.576 85.0326 272.538 86.7543 267.647 86.8273C256.301 87.0374 250.543 80.2935 250.372 66.5955C250.543 52.8136 256.301 46.0066 267.647 46.1747C272.538 46.3207 276.576 48.0678 279.761 51.416C280.558 52.2547 281.885 52.3975 282.756 51.6346L289.525 45.7021C290.345 44.9844 290.443 43.7385 289.697 42.9452C287.092 40.1756 284.114 37.9116 280.763 36.1533C276.839 34.1365 272.296 33.086 267.135 33.002C259.287 32.9179 252.398 35.5021 246.469 40.7543C240.327 46.0907 237.171 54.7044 237 66.5955C237.171 78.3606 240.327 86.8693 246.469 92.1216C252.398 97.3739 259.287 100 267.135 100C272.296 99.916 276.839 98.8025 280.763 96.6596C284.084 94.917 287.039 92.7379 289.627 90.1224C290.407 89.3346 290.322 88.061 289.489 87.3305L282.763 81.4369Z"
                            fill={colors.bg_dark}
                        />
                        <path
                            d="M297 66.4685C297 73.3597 297.568 78.6121 298.703 82.2258C299.881 85.8394 301.689 88.9699 304.129 91.6171C305.937 93.6761 308.46 95.5249 311.699 97.1637C314.895 98.9705 318.995 99.916 324 100C329.173 99.916 333.357 98.9705 336.554 97.1637C338.278 96.4073 339.687 95.5039 340.78 94.4534C342 93.529 343.03 92.5836 343.871 91.6171C346.479 88.9699 348.329 85.8394 349.423 82.2258C350.474 78.6121 351 73.3597 351 66.4685C351 59.5773 350.474 54.2828 349.423 50.5851C348.344 47.0193 346.528 44.0059 343.975 41.5447C343.906 41.4787 343.842 41.4085 343.783 41.3344C342.064 39.1943 339.654 37.2776 336.554 35.5842C333.357 33.9454 329.173 33.084 324 33C318.995 33.084 314.895 33.9454 311.699 35.5842C308.46 37.307 305.937 39.2609 304.129 41.4459C301.689 43.9251 299.881 46.9715 298.703 50.5851C297.568 54.2828 297 59.5773 297 66.4685ZM337.815 66.5945C337.815 71.0486 337.605 74.3261 337.185 76.4271C336.764 78.5701 335.902 80.461 334.598 82.0997C333.631 83.3603 332.201 84.4738 330.308 85.4403C328.5 86.3647 326.397 86.8269 324 86.8269C321.771 86.8269 319.71 86.3647 317.818 85.4403C316.009 84.4738 314.537 83.3603 313.402 82.0997C312.266 80.461 311.446 78.5701 310.942 76.4271C310.437 74.3261 310.185 71.0066 310.185 66.4685C310.185 61.8884 310.437 58.5268 310.942 56.3838C311.446 54.3249 312.266 52.518 313.402 50.9633C314.537 49.4926 316.009 48.3371 317.818 47.4967C319.71 46.6143 321.771 46.1731 324 46.1731C326.397 46.1731 328.5 46.6143 330.308 47.4967C332.201 48.3371 333.631 49.4926 334.598 50.9633C335.902 52.518 336.764 54.3249 337.185 56.3838C337.605 58.5268 337.815 61.9304 337.815 66.5945Z"
                            fill={colors.bg_dark}
                        />
                        <path
                            d="M360 98C360 99.1046 360.895 100 362 100H370.842C371.947 100 372.842 99.1046 372.842 98V60.6032C372.842 55.9708 374.051 52.4434 376.467 50.0209C378.843 47.556 381.875 46.3235 385.561 46.3235C389.248 46.3235 392.259 47.556 394.594 50.0209C396.97 52.4434 398.158 55.9708 398.158 60.6032V98C398.158 99.1046 399.053 100 400.158 100H409C410.105 100 411 99.1046 411 98V56.0133C410.795 48.4485 408.522 42.7111 404.18 38.8011C399.796 34.9337 394.963 33 389.678 33C382.864 33 377.351 35.593 373.138 40.779C373.107 40.818 373.059 40.8411 373.008 40.8411V40.8411C372.917 40.8411 372.842 40.7666 372.842 40.6748V35.8287C372.842 34.7242 371.947 33.8287 370.842 33.8287H362C360.895 33.8287 360 34.7242 360 35.8287V98Z"
                            fill={colors.bg_dark}
                        />
                        <path
                            d="M27.7518 18.7556C26.6472 18.7556 25.7518 19.651 25.7518 20.7556V45.7935C25.7518 47.1868 25.7082 49.5815 25.6211 52.9775C25.5339 56.2865 25.316 59.9438 24.9675 63.9494C24.6189 67.9551 24.096 71.9171 23.3988 75.8357C22.7017 79.7542 21.743 83.0197 20.523 85.632C18.4315 90.073 15.7735 93.5997 12.5491 96.2121C9.32467 98.7374 5.40308 100 0.784318 100V100C0.351151 100 0 99.6488 0 99.2157V88.5482C0 87.4952 0.822265 86.6441 1.85371 86.4322C3.60248 86.0731 5.03252 85.371 6.14383 84.3258C7.62532 82.9326 8.84537 81.191 9.80398 79.1011C10.5883 77.2725 11.1983 75.052 11.6341 72.4396C12.1569 69.8272 12.5491 67.0407 12.8105 64.0801C13.072 61.1194 13.2463 58.0716 13.3334 54.9368C13.4206 51.802 13.4641 48.7977 13.4641 45.9242V9C13.4641 7.89543 14.3596 7 15.4641 7H33C34.1046 7 35 7.89543 35 9V16.7556C35 17.8602 34.1046 18.7556 33 18.7556H27.7518Z"
                            fill={colors.interactive}
                        />
                        <path
                            d="M44 100C42.8954 100 42 99.1046 42 98V9C42 7.89543 42.8954 7 44 7H52.75C53.8546 7 54.75 7.89543 54.75 9V84.677C54.75 85.7815 55.6454 86.677 56.75 86.677H78C79.1046 86.677 80 87.5724 80 88.677V98C80 99.1046 79.1046 100 78 100H44Z"
                            fill={colors.bg_dark}
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_4_60"
                                x1="71.8582"
                                y1="80.9219"
                                x2="477.288"
                                y2="80.922"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor={colors.bg_grey_200} />
                                <stop
                                    offset="1"
                                    stopColor={colors.bg_grey_200}
                                    stopOpacity="0"
                                />
                            </linearGradient>
                            <linearGradient
                                id="paint1_linear_4_60"
                                x1="71.8582"
                                y1="80.9219"
                                x2="477.288"
                                y2="80.922"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor={colors.bg_grey_200} />
                                <stop
                                    offset="1"
                                    stopColor={colors.bg_grey_200}
                                    stopOpacity="0"
                                />
                            </linearGradient>
                        </defs>
                    </svg>
                </a>
            </Link>
        </SHeaderLogo>
    );
};

const SHeaderLogo = styled.div`
    position: relative;
    z-index: 2;
    a {
        font-size: ${fonts.fs_body_l};
        font-weight: ${fonts.fw_bold};
        @media (hover) {
            &:hover {
                color: ${colors?.typo_secondary};
            }
        }
        &:focus,
        &:active {
            color: ${colors?.typo_secondary};
        }

        svg {
            width: 100px;
            ${down("lg")} {
            }
            ${down("md")} {
            }
            ${down("sm")} {
            }
            ${down("xs")} {
            }
        }
        &.active {
            color: ${colors?.typo_primary};
        }
    }
`;

export default HeaderLogo;