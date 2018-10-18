import React, { Component } from 'react';
import {connect} from 'react-redux';
import { View, 
    Text, 
    StyleSheet,
    ToastAndroid, 
    TouchableOpacity } from 'react-native';
import { removeTaskAction } from '../actions/TaskAction';

class TaskItem extends Component {

  onLongPress = () => {
    this.props.removeTaskAction(this.props.item.uid);
    ToastAndroid.show('Task was removed!', ToastAndroid.SHORT);
  }

  render() {
      const {name, 
            description, 
            dateOnly,
            uid, 
            timeOnly,} = this.props.item;  
      const {itemStyle, 
            textStyleName, 
            textStyleDescript,
            textStyleDate,
            textStyleTime} = styles    

    return (
        
            <TouchableOpacity style={itemStyle}
                onLongPress={this.onLongPress}
                >
                <Text style={textStyleName}>{name}</Text>
                <Text style={textStyleDescript}>{description}</Text>
                <Text style={textStyleDate}>{dateOnly}</Text>
                <Text style={textStyleTime}>{timeOnly}</Text>
            </TouchableOpacity>
            
    );
  }
}
export default connect(null, {removeTaskAction}) (TaskItem);

const styles = StyleSheet.create({
    itemStyle: {
        backgroundColor: '#dfdbe0',
        minWidth: 300,
        borderWidth: 2,
        borderRadius: 10,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        padding: 10,
        shadowColor: 'black',
        shadowOffset: {width: 5, height: 5},
        shadowOpacity: 0.5,
    },
    textStyleName: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#009900'
    },
    textStyleDescript: {
        fontStyle: 'italic',
        fontSize: 20,
        color: 'black'
    },
    textStyleDate: {
        fontSize: 22,
        color: 'black',
    },
    textStyleTime: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
    }
});
