import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DateTimeForm from '../common/DateTimeForm';

class TaskCreate extends Component {
  
  render() {
    const {container} = styles;
    return (
      <View style={container}>
        <DateTimeForm/>
      </View>
    );
  }
}
export default TaskCreate;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  }
});