import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Rows = props => {
  return (
    <TouchableOpacity style={styles.list} onPress={()=>{props.onSelectContact(props)}}>
      <Text style={styles.details} key={props.key}>
        {props.name}
      </Text>
      <Text>{props.phone}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 20,
  },
  details: {
    fontSize: 20,
  },
});

export default Rows;
