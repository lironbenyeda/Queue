import { createStore, applyMiddleware } from "redux";

// Logger with default options


import questionReducer from "./questionReducer";
export const initialState = {
    questions: [],
    polls: [],
    userName: '',
    screenSetting: {
        questions: true,
        polls: false,
        answered: false

    }

}
export default function configureStore() {
    const store = createStore(questionReducer, initialState, applyMiddleware());
    return store;
}