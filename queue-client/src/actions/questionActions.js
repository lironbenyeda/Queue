export const Types = {
    ASK_QUESTION: "ASK_QUESTION",
    CHANGE_SCREEN:"CHANGE_SCREEN"
};
export const createQuestion = question => (
    {
        type: Types.ASK_QUESTION,
        question: question
    });
export const changeScreen = screenSetting =>(
    {
        type: Types.CHANGE_SCREEN,
        screenSetting:screenSetting
    }
)

