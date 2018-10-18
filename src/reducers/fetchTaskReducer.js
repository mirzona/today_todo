import { FETCH_TASKS_ACTION } from "../actions/types";

const INITIAL_STATE={};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_TASKS_ACTION:                
            return action.payload;
        default:
            return state;
    }
}