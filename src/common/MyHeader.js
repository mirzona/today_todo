import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const MyHeader = ({title, styleHeader, styleText}) => {
    const {headerStyle, textStyle} = styles
    return (
        <View style={[headerStyle, styleHeader]}>
            <Text style={[textStyle, styleText]}>{title}</Text>
        </View>
    );
};

export default MyHeader;
const styles = StyleSheet.create({
    headerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 100,
    },
    textStyle: {
        fontSize: 30,
        fontWeight: 'bold',
        minWidth: 200,

    }
});