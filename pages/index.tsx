import type { NextPage } from "next";
import React from "react";

import { Meta } from "@components/elements";
import { Layout } from "@components/layout";
import { Verbs } from "@components/verbs";

const Main: NextPage = () => {
    return (
        <>
            <Meta title={"Irregular verbs"} />
            <Layout padding={true}>
                <Verbs />
            </Layout>
        </>
    );
};

export default Main;
