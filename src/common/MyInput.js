import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const MyInput = ({
    label, 
    placeholder, 
    value, 
    onChangeText, 
    secureTextEntry,
    styleText,
    underlineColorAndroid, 
    placeholderTextColor,
    multiline,
    myStyleInput,
    styleTextInput, }) => {

 const {myInputStyle, textStyle, texInputStyle} = styles;

    return (
      <View style={[myInputStyle, myStyleInput]}>
        <Text style={[textStyle, styleText]}>{label}</Text>
        <TextInput 
            style={[texInputStyle, styleTextInput]}
            placeholder={placeholder}
            onChangeText={onChangeText}
            value={value}  
            secureTextEntry={secureTextEntry}
            underlineColorAndroid={underlineColorAndroid}
            placeholderTextColor={placeholderTextColor}
            multiline={multiline}
        />
      </View>
    );
  }
export default MyInput;

const styles = StyleSheet.create({
    myInputStyle: {
        flexDirection: 'row',
        margin: 10,
    }, 
    textStyle: {
        fontSize: 20,
        padding: 10,
    },
    texInputStyle: {
        flex: 1,
        fontSize: 20,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderRadius: 10,
        // paddingLeft: 10,
        paddingRight: 10,
    }
});