import { createStore, applyMiddleware } from "redux";

// Logger with default options
import logger from "redux-logger";

import questionReducer from "./questionReducer";
export const initialState = {
    questions: [],
    polls: [],
    userName: '',
    screenSetting: {
        question: false,
        polls: false,
        answered: false

    }

}
export default function configureStore() {
    const store = createStore(questionReducer, initialState, applyMiddleware(logger));
    return store;
}