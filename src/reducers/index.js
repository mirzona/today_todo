import {combineReducers} from 'redux';
import authReducer from './authReducer';
import taskReducer from './taskReducer';
import fetchTaskReducer from './fetchTaskReducer';

export default combineReducers({
    auth: authReducer,
    task: taskReducer,
    tasks_fetched: fetchTaskReducer
});