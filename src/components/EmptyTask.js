import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NO_TASKS_MESSAGE } from '../actions/types';

const EmptyTask = () => {
      return(
        <View style={styles.container}>
          <Text style={styles.textStyle}>{NO_TASKS_MESSAGE}</Text>
        </View>
      );
    }
export default EmptyTask

const styles = StyleSheet.create({
     container: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
       marginTop: 20,
       },
      textStyle: {
        fontSize: 25,
        fontStyle: 'italic',
        color: 'white',
        padding: 10,
        
      }
});