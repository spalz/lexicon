import React, { useState, useEffect } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import CN from "classnames";
import { ProjectProvider } from "@context";

import {
    FontsVarsStyle,
    GlobalStyle,
    GlobalVarsStyle,
    SpacingVarsStyle,
    ThemeVarsStyle,
    FontsStyle,
    FormVarsStyle,
    ReactTooltipStyle,
} from "@styles";
import { Header } from "@components/header";
const { wrapper } = require("@redux/store");
import { Provider } from "react-redux";

import "@styles/normalize_style.css";

function MyApp({ Component, ...rest }: AppProps) {
    const router = useRouter();

    const { store, props } = wrapper.useWrappedStore(rest);

    const [openMenu, setOpenMenu] = useState<boolean>(false);

    const onClickOpenMenu = () => {
        setOpenMenu(!openMenu);
    };

    useEffect(() => {
        setOpenMenu(false);
    }, [router.pathname]);

    return (
        <>
            <GlobalStyle />
            <FontsVarsStyle />
            <GlobalVarsStyle />
            <SpacingVarsStyle />
            <ThemeVarsStyle />
            <FontsStyle />
            <FormVarsStyle />
            <ReactTooltipStyle />
            <ProjectProvider>
                <Provider store={store}>
                    <div
                        className={CN(`layout`, {
                            "open-menu": openMenu,
                        })}
                    >
                        <Header onClickOpenMenu={onClickOpenMenu} />
                        <Component {...props.pageProps} />
                    </div>
                </Provider>
            </ProjectProvider>
        </>
    );
}

export default MyApp;
