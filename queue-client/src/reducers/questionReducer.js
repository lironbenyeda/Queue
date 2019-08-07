import { Types } from '../actions/questionActions'
import { initialState } from './store'

const questionReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.ASK_QUESTION: {
            console.log(action.question);
            return Object.assign({}, state, {
                questions: action.question
            })
        }
        default: {
            return state
        }

    }
}
export default questionReducer;