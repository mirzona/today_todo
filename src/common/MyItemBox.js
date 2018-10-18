import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const MyItemBox = ({styleView}, props) => {
    const {viewStyle} = styles;
    return(    
        <View style= {[viewStyle, styleView]}>
            {props.children}
        </View>
    );  
};

export default MyItemBox;
const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 2,
        borderRadius: 10,
    }
});