import { Types } from '../actions/questionActions'
import { initialState } from './store'

const questionReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.ASK_QUESTION: {
            return Object.assign({}, state, {
                questions: action.question
            })
        }
        case Types.CHANGE_SCREEN:{
            return Object.assign({},state,{screenSetting:action.screenSetting})
        }
        case Types.UPDATE_POLL:{
            return Object.assign({},state,{polls:[...action.polls]})
        }
        case Types.UPDATE_QUESTION:{
            return Object.assign({},state,{questions:[...action.questions]})
        }
        case Types.UPDATE_USER:{
            return {...state,userName:action.user}
        }
        default: {
            return state
        }

    }
}
export default questionReducer;