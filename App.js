import React from 'react';
import {Provider, } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './src/reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import RouterFlux from './src/Router';

export default class App extends React.Component {
  componentWillMount(){
    console.disableYellowBox = true;
    // Initialize Firebase
    firebase.initializeApp(
      {
        apiKey: "AIzaSyClM5zx5-2Va3R8NNiAtMTIfA_dj3IAyDU",
        authDomain: "today-todo-7fba8.firebaseapp.com",
        databaseURL: "https://today-todo-7fba8.firebaseio.com",
        projectId: "today-todo-7fba8",
        storageBucket: "",
        messagingSenderId: "756758646671"
      }
    );
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <RouterFlux />
      </Provider>
      
    );
  }
}


