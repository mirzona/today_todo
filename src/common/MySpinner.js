import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const MySpinner = ({size, color}) =>{ 
    return (
        <View>
            <ActivityIndicator 
                size={size}
                color={color}
                
            />
        </View>
    );  
} 
export default MySpinner;
