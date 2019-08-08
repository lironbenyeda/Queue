export const Types = {
    ASK_QUESTION: "ASK_QUESTION",
    CHANGE_SCREEN: "CHANGE_SCREEN",
    UPDATE_POLL: "UPDATE_POLL",
    UPDATE_QUESTION: "UPDATE_QUESTION"
};
export const createQuestion = question => (
    {
        type: Types.ASK_QUESTION,
        question: question
    });
export const changeScreen = screenSetting => (
    {
        type: Types.CHANGE_SCREEN,
        screenSetting: screenSetting
    }
)
export const updatePolls = newPolls => (
    {

        type: Types.UPDATE_POLL,
        polls: newPolls
    }
)
export const updateQuestion = newQuestion => (
    {

        type: Types.UPDATE_QUESTION,
        questions: newQuestion
    }
)


