import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import {connect} from 'react-redux';
import ListItem from './ListItem';

class FlatList extends Component {
 myRenderItem(item) {
     return <ListItem item={item}/>
 }
  render() {
    return (
      <View>
        <FlatList 
          data={this.props}
          renderItem={this.myRenderItem.bind(this)}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
    return { }
}
export default connect(mapStateToProps) (FlatList);
