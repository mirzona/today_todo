import { EMAIL_INPUT_ACTION, 
    PASSWORD_INPUT_ACTION, 
    LOGIN_SUCCESS_ACTION,
    ERROR_LOGIN_ACTION,
    LOGIN_ACTION,
    ERROR_LOGIN_MESSAGE} from "../actions/types";

const INITIAL_STATE = {
    email: '',
    password: '',
    loading: false, 
    errorMessage: '',
    user: ''
}
export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case EMAIL_INPUT_ACTION :
            return {...state, email: action.payload, errorMessage: ''};
        case PASSWORD_INPUT_ACTION :
            return {...state, password: action.payload, errorMessage: ''};
        case LOGIN_ACTION:
            return {...state, loading: action.payload}
        case LOGIN_SUCCESS_ACTION :
            return {...state, ...INITIAL_STATE};
        case ERROR_LOGIN_ACTION: 
            return {...state, ...INITIAL_STATE, errorMessage: ERROR_LOGIN_MESSAGE}
        default:
            return state;
    }
};