export const Types = {
    ASK_QUESTION: "ASK_QUESTION"
};
export const createQuestion = question => (
    {
        type: Types.ASK_QUESTION,
        question: question
    });

