import { configureStore } from "@reduxjs/toolkit";
// import logger from "redux-logger";
import { createWrapper } from "next-redux-wrapper";
import { wordsApi } from "@redux";

export const makeStore = () =>
    configureStore({
        reducer: {
            [wordsApi.reducerPath]: wordsApi.reducer,
        },
        middleware: (gDM) => gDM().concat(wordsApi.middleware),
    });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper<AppStore>(makeStore, { debug: false });
