import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class ListItem extends Component {

  render() {
      const {name} = this.props;  
      const {itemStyle, textStyle} = styles    
    return (
        <View style={itemStyle}>
            <Text style={textStyle}>{name}</Text>
        </View>
    );
  }
}
export default ListItem;

const styles = StyleSheet.create({
    itemStyle: {

    },
    textStyle: {

    }
});
