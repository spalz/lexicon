import React from "react";
import Head from "next/head";

export interface MetaProps {
    title?: string | undefined;
    og_image?: string;
    og_url?: string;
    description?: string | null;
    part?: string;
    published_time?: string;
    modified_time?: string;
}

const Meta: React.FC<MetaProps> = ({
    title,
    description,
    published_time,
    modified_time,
    part = " - Lexicon Life",
    og_image = `${process.env.NEXT_PUBLIC_URL}/images/meta_share.jpg`,
}) => {
    return (
        <>
            <Head>
                <title>{`${title}${part}`}</title>
                <meta name="twitter:title" content={title} />
                <meta
                    name="viewport"
                    content="width=device-width, minimum-scale=1, maximum-scale=1, initial-scale=1, user-scalable=no"
                />
                <meta property="og:type" content="website" />

                {title && <meta property="og:title" content={title} />}
                {description ? (
                    <>
                        <meta property="og:description" content={description} />
                        <meta name="description" content={description} />
                        <meta
                            name="twitter:description"
                            content={description}
                        />
                    </>
                ) : null}
                {og_image ? (
                    <>
                        <meta property="og:image" content={og_image} />
                        <meta
                            property="og:image:secure_url"
                            content={og_image}
                        />
                        <meta property="og:image:width" content={"1200px"} />
                        <meta property="og:image:height" content={"630px"} />
                        <meta name="twitter:image" content={og_image} />
                    </>
                ) : null}

                {published_time ? (
                    <meta
                        property="article:published_time"
                        content={published_time}
                    />
                ) : null}
                {modified_time ? (
                    <meta
                        property="article:modified_time"
                        content={modified_time}
                    />
                ) : null}
                {modified_time ? (
                    <meta property="og:updated_time" content={modified_time} />
                ) : null}
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
        </>
    );
};

export default Meta;
