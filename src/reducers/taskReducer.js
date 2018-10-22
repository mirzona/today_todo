import { UPDATE_TASK_ACTION, CREATE_TASK_ACTION, REMOVE_TASKS_ACTION } from "../actions/types";

const INITIAL_STATE = {
    name: '',
    description: '',
    dateOnly: '',
    timeOnly: '',
    taskTime: null,
}
export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case UPDATE_TASK_ACTION:                 
            return {...state, [action.payload.prop]: action.payload.value}
        case CREATE_TASK_ACTION: 
            return INITIAL_STATE;
        case REMOVE_TASKS_ACTION: 
            return state;
        default:
            return state;
    }
}