import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import {AsyncStorage} from 'react-native';
import { EMAIL_INPUT_ACTION, 
    PASSWORD_INPUT_ACTION, 
    SPINNER_ACTION, 
    LOGIN_SUCCESS_ACTION,
    ERROR_LOGIN_ACTION,
    LOGIN_ACTION} from "./types";

setUser = async(prop, value) => {
        try{
          await AsyncStorage.setItem(prop, value);
        }catch(error) {
          console.log(error);
        }
      }
export const emailInputAction= (text) => {
    this.setUser('currentUserEmail', text);
    return {
        type: EMAIL_INPUT_ACTION,
        payload: text
    }
};
export const passwordInputAction= (text) => {
    this.setUser( 'currentUserPassword', text);
    return {
        type: PASSWORD_INPUT_ACTION,
        payload: text
    }
};
export const spinnerAction= (input) => {
    return {
        type: SPINNER_ACTION,
        payload: input
    }
};

export const loginAction= ({email, password}) => {

    return (dispatch) => {
        dispatch({
            type: LOGIN_ACTION,
            payload: true
        });
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => {
                loginSuccess(dispatch, user);
            })
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => {
                        loginSuccess(dispatch, user); 
                    })
                    .catch(() => loginError(dispatch))   
            });        
    }
};
// helper methods for loginAction
const loginSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_SUCCESS_ACTION, 
        payload: user});
     
     Actions.main();
};
const loginError = (dispatch) => {
    dispatch({
        type: ERROR_LOGIN_ACTION
    })
}