import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import {connect} from 'react-redux';
import { fetchTasksAction } from '../actions/TaskAction';
import _ from 'lodash';
import TaskItem from './TaskItem';
import EmptyTask from './EmptyTask';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

class TaskList extends Component {
  componentWillMount() {
    this.props.fetchTasksAction();
    console.disableYellowBox = true;
  }
  myRenderItem({item}) {
      return <TaskItem item={item}/>
  }

  render() {
    return (
      
        <View style={styles.viewStyle}>
        <FlatList 
          data={this.props.orderByTimeTasks}
          renderItem={this.myRenderItem.bind(this)}
          keyExtractor={item => item.uid}
          ListEmptyComponent={<EmptyTask/>}
        /> 
        <Icon style={styles.iconStyle}
          name="plus-circle"
          size={50}
          color="white"
          onPress={() => Actions.task_create()}
        />
      </View>
      
      
    );
  }
}
const mapStateToProps = state => {
  
  const tasks = _.map(state.tasks_fetched, (val, uid) => {
      return {...val, uid}

  });
  const orderByTimeTasks = _.sortBy(tasks,['task', 'taskTime']);
  return {orderByTimeTasks};
}
export default connect(mapStateToProps, {fetchTasksAction}) (TaskList);
const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#63b686',
    marginTop: 20,
    flex: 1,
    alignItems: 'center',
  },
  iconStyle: {
    marginBottom: 20,
    marginTop: 20,
    
  }
});