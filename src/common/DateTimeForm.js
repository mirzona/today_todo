import React, { Component } from 'react';
import { View } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import MyButton from '../common/MyButton';
import MyHeader from '../common/MyHeader';
import MyInput from '../common/MyInput';
import {connect} from 'react-redux';
import { updateTaskAction, saveTaskAction } from '../actions/TaskAction';

class DateTimeForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
       pickerVisible: false
    };
  };
  showPicker = () => {
    this.setState({pickerVisible: true});
  }
  hidePicker = () => {
    this.setState({pickerVisible: false});
  }
  pickPicker = (date) => {
    this.props.updateTaskAction({prop: 'dateOnly', value: date.toLocaleDateString()})
    this.props.updateTaskAction({prop: 'timeOnly', value: date.toLocaleTimeString()})
    this.hidePicker();
  }
  onSaveTask = () => {
    const {name, description, dateOnly, timeOnly} = this.props;
    this.props.saveTaskAction({name, description, dateOnly, timeOnly})
  }
  render() {
    return (
      <View >
        <MyHeader 
          title='Make your task'
          styleText={{color: 'green', marginTop: 10}}
          styleHeader={{marginBottom: 30}}
        />
        <MyInput        
          placeholder='Task name (required!)'
          onChangeText={(text) => this.props.updateTaskAction({prop: 'name', value: text}) }
          value={this.props.taskName}
          styleText={{padding: 0}}
          styleTextInput={{
             borderWidth: 1,
             borderColor: 'green',
             marginBottom: 5,
             padding: 10,
            }}
          placeholderTextColor='green'
          underlineColorAndroid= 'transparent'
        />
        <MyInput        
          placeholder='Description of the task (optional)'
          onChangeText={(text) => this.props.updateTaskAction({prop: 'description', value: text})}
          value={this.props.description}
          styleText={{padding: 0}}
          styleTextInput={{
             borderWidth: 1,
             borderColor: 'orange',
             marginBottom: 5,
             padding: 10,
            }}
          placeholderTextColor='orange'
          underlineColorAndroid= 'transparent'
          multiline
        />
        <MyButton
          title='Pick date/time'
          onPress={this.showPicker}
          styleText={{color: 'green'}}
        />
        <MyButton 
          title='SAVE'
          onPress={this.onSaveTask}
          styleText={{ color: 'white', fontSize: 22,}}
          style={{backgroundColor: 'green',}}
        />
        <DateTimePicker 
          isVisible={this.state.pickerVisible}
          onConfirm={this.pickPicker}
          onCancel={this.hidePicker}
          mode='datetime'
        />
      </View>
    );
  }
}
const mapStateToProps = state => {
  const {name, description, dateOnly, timeOnly} = state.task;
  return {name, description, dateOnly, timeOnly};
}
export default connect(mapStateToProps, {
  updateTaskAction, saveTaskAction}) (DateTimeForm);

