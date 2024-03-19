import type { NextPage } from "next";
import React from "react";

import { Meta } from "@components/elements";
import { Layout } from "@components/layout";
import VerbsBook from "@components/verbs/VerbsBook";

const Main: NextPage = () => {
    return (
        <>
            <Meta title={"Irregular verbs"} />
            <Layout padding={true}>
                <VerbsBook />
            </Layout>
        </>
    );
};

export default Main;
