import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

const MyButton = ({title, style, onPress, styleText}) => {

    const {buttonStyle, textStyle} = styles;

        return(
            <View>
            <TouchableOpacity
                onPress={onPress}
                style={[buttonStyle, style]}
            >
                <Text style={[textStyle, styleText]} >{title} </Text>
            </TouchableOpacity>
        </View>
     );      
};
export default MyButton;

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        shadowRadius: 5,
        shadowColor: 'black',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    textStyle: {
        fontSize: 20,
        color: 'black',
        padding: 10,
    }
});