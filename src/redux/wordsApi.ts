import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { WordProps, CategoryProps } from "@interfaces";
import { HYDRATE } from "next-redux-wrapper";

const q_limit = (limit: number) => `&pagination[limit]=${limit}`;
const q_start = (start: number) => `&pagination[start]=${start}`;
const q_category = (r: number | undefined) =>
    r ? `&filters[categories][id][$in]=${r}` : "";

export const wordsApi = createApi({
    reducerPath: "wordsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/`,
    }),
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) {
            return action.payload[reducerPath];
        }
    },
    endpoints: (build) => ({
        // * get words
        getWords: build.query<
            WordProps,
            {
                limit?: number;
                start?: number;
                category?: number;
                query?: string;
            }
        >({
            query: ({ limit = 10, start = 10, category, query = "" }) =>
                `
words?
${q_limit(limit)}
${q_category(category)}
&populate=original
&populate=transition
&populate=hints
&populate=hints
&populate=hint_image
&populate=usage_examples
&populate=misspell
&populate=relation_word
${query}`,
        }),
        // * add word
        addWord: build.mutation({
            query: (data) => ({
                url: "words",
                method: "POST",
                body: data,
            }),
        }),

        // * get categories
        getCategories: build.query<
            CategoryProps,
            {
                limit?: number;
                start?: number;
                query?: string;
            }
        >({
            query: ({ limit = 10, start = 10, query = "" }) =>
                `categories?${query}`,
        }),
        // * add category
        addCategory: build.mutation({
            query: (data) => ({
                url: "categories",
                method: "POST",
                body: data,
            }),
        }),
    }),
});

export const {
    useGetWordsQuery,
    useAddWordMutation,
    useGetCategoriesQuery,
    useAddCategoryMutation,
    util: { getRunningOperationPromises },
} = wordsApi;

export const { getWords } = wordsApi.endpoints;
