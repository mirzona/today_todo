import { UPDATE_TASK_ACTION, CREATE_TASK_ACTION, FETCH_TASKS_ACTION } from "./types";
import firebase, { auth } from 'firebase';
import { Actions } from "react-native-router-flux";
import { ToastAndroid } from 'react-native';

export const updateTaskAction = ({prop, value}) => {
    return {
        type: UPDATE_TASK_ACTION,
        payload: {prop, value}
    }
};
export const saveTaskAction = ({name, description, dateOnly, timeOnly, taskTime}) => {
    return (dispatch) => {
        const {currentUser} = firebase.auth();
        if(name !== '') {
            firebase.database().ref(`/users/${currentUser.uid}/task`)
            .push({name, description, dateOnly, timeOnly, taskTime})
            .then(() =>{
                dispatch({type: CREATE_TASK_ACTION})
                Actions.pop();
            }) 
          } else {
            ToastAndroid.show('Task name is required! Try again!', ToastAndroid.LONG);      
          }
        
    }
}
export const fetchTasksAction = () => {
    return (dispatch) => {        
        // const date = new Date();
        const {currentUser} = firebase.auth();
        // const today = date.toLocaleDateString();
        firebase.database().ref(`/users/${currentUser.uid}/task`)
        .orderByChild('taskTime')
            .on('value', snapshot => {
                dispatch({
                    type: FETCH_TASKS_ACTION,
                    payload: snapshot.val()
                });
            });
    }
}
export const removeTaskAction = (uid) => {
    return () => {
        const {currentUser} = firebase.auth();
        firebase.database().ref(`/users/${currentUser.uid}/task`)
            .child(uid)
            .remove();
    }
}
