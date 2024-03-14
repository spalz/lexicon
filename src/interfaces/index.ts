// *
// * name
// *

export type QuizResultProps = {
    word_original: Array<{ title: string }>;
    word_translate: Array<{ title: string }>;
    math: string;
    value: string;
    isCorrect: boolean;
};

// *
// * Category
// *

export interface CategoryProps {
    data: Array<CategoryAttributesProps>;
    meta: {
        pagination: {
            start: number;
            limit: number;
            total: number;
        };
    };
}

export interface CategoryAttributesProps {
    id: number;
    attributes: {
        id: number;
        title: string;
        slug: string;
        words: {
            data: Array<WordProps>;
        };
    };
}

// *
// * MediaSourse
// *
export interface MediaSourse {
    data: {
        attributes: {
            url: string;
        };
    };
}

// *
// * Word
// *

export interface WordProps {
    data: Array<WordAttributesProps>;
    meta: {
        pagination: {
            start: number;
            limit: number;
            total: number;
        };
    };
}

export interface WordAttributesProps {
    id: number;
    attributes: {
        complexity: "common" | "easy" | "medium" | "hard";
        type: "verb" | "noun" | "adjective" | "pronoun";
        title: string;
        updatedAt: string;
        createdAt: string;
        slug: string;
        categories: Array<CategoryProps>;
        original: Array<{ id: number; title: string }>;
        transition: Array<{ id: number; title: string }>;
        hints: Array<{ id: number; original: string; transition: string }>;
        hint_image: MediaSourse;
        synonyms: Array<WordProps>;
        relation_word: Array<WordProps>;
        usage_examples: Array<{
            id: number;
            original: string;
            transition: string;
        }>;
        misspell: Array<{ id: number; title: string }>;
    };
}
