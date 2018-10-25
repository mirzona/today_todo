import React, { Component } from 'react';
import { View, Text, StyleSheet, AsyncStorage } from 'react-native';
import {connect} from 'react-redux';
import MyInput from '../common/MyInput';
import MyButton from '../common/MyButton';
import MyHeader from '../common/MyHeader';
import MySpinner from '../common/MySpinner';
import * as actions from '../actions';


 class Welcome extends Component {
   componentWillMount() {
    this.retriveUser();
   }
   retriveUser = async() => {
    try{
      const emailStored = await AsyncStorage.getItem('currentUserEmail');
      const passStored = await AsyncStorage.getItem('currentUserPassword');
      if( emailStored !== null && passStored !== null){
          this.props.emailInputAction(emailStored);
          this.props.passwordInputAction(passStored)
      }
     }catch(error){
      console.log(error);
    }
   }
    
     renderButtonOrSpinner(){
       if(this.props.loading)
         return <MySpinner size='large' color='green'/>;
       return (
        <MyButton
          title='confirm'
          onPress={this.onConfirmPressed.bind(this)}
          style={{marginTop: 20, backgroundColor: '#afff00'}}
        />
       );
     }
     onConfirmPressed(){
      const {email, password} = this.props;
      this.props.loginAction({email, password})
     }
      
      onChangeEmail(text) {
        this.props.emailInputAction(text);
      }
      onChangePassword(text) {
        this.props.passwordInputAction(text)
      }
 
  render() {

    const {welcomeStyle, errorStyle} = styles;
    const {email, password} = this.props;
    return (
      
      <View style={welcomeStyle}>
          <MyHeader
            title='TOday-TOdo'
            styleText={{color: '#63b686',}}
          />

          <MyInput
            placeholder='type here...'
            styleText={{fontSize: 16, minWidth: 100}}
            label='email'
            onChangeText={this.onChangeEmail.bind(this)}
            styleTextInput={{padding: 10, maxWidth: 200, fontSize: 18}}
            value={email}
          />
          <MyInput
            placeholder='type here...'
            styleText={{fontSize: 16, minWidth: 100}}
            label='password'
            onChangeText={this.onChangePassword.bind(this)}
            value={password}
            styleTextInput={{padding: 10, maxWidth: 200, fontSize: 18,}}
            secureTextEntry
          />
          
             {this.renderButtonOrSpinner()}
             <Text style={errorStyle}>{this.props.errorMessage}</Text>

      </View>
    );
  }
}
const mapStateToProps = state => {
  const {email, password, loading, errorMessage} = state.auth;
    return {email, password, loading, errorMessage}
}
export default connect(mapStateToProps, actions) (Welcome);

const styles = StyleSheet.create({
  welcomeStyle: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  errorStyle: {
    color: 'red',
    fontSize: 25,
  }

});