import React from 'react';
import { View, Modal, StyleSheet, Text } from 'react-native';
import MyButton from './MyButton';

const MyModal = ({title, onConfirm, onCancel, visible}) => {
      return(
        <Modal
            transparent
            onRequestClose={() => {}}
            visible={visible}
            animationType='fade'
        >
            <View style={styles.container}>
                <Text style={styles.textStyle}>{title}</Text>
                <MyButton
                    title='confirm'
                    onPress={onConfirm}
                />
                <MyButton
                    title='cancel'
                    onPress={onCancel}
                />
            </View>
        </Modal>
      );
    }
export {MyModal}

const styles = StyleSheet.create({
     container: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: 'rgba(0, 0, 0, 0.75)',
       },
       textStyle: {
           color: 'white',
           fontSize: 20,
       }
});