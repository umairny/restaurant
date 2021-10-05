import * as ActionTypes from './ActionTypes';

export const Feedback = (state = {
        errMess: null,
        feedback: []
    }, action) => {
    switch(action.type) {
        case ActionTypes.FEEDBACK_REQUEST:
            return {...state, isLoading: false, errMess: null, feedback: action.payload};

        case ActionTypes.FEEDBACK_FAILURE:
            return {...state, isLoading: false, errMess: action.payload, feedback: []};

        case ActionTypes.FEEDBACK_SUCCESS:
            var feedback = action.payload;
            return {...state, feedback: state.feedback.concat(feedback)};

        default:
            return state;
    }
}