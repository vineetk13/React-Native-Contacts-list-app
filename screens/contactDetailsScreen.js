import React from "react";
import { Text, Button, View,StyleSheet } from "react-native";

export default class ContactDetailsScreen extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.no}>{this.props.navigation.getParam('phone')}</Text>
        <Button title="Go to related contact" onPress={this._goToRandom}/>
      </View>
    );
  }

  _goToRandom = () => {
    const contacts=this.props.screenProps.contacts;
    const phone=this.props.navigation.getParam('phone');
    let randomContact;
    while(!randomContact){
      const randomIndex=Math.floor(Math.random()*contacts.length);
      if(contacts[randomIndex].phone!==phone){
        randomContact=contacts[randomIndex];
      }
    }
    this.props.navigation.push('ContactDetails',{name:randomContact.name,phone:randomContact.phone})
  };
}

const styles=StyleSheet.create({
  no:{
    textAlign:'center',
    fontSize:20,
    padding:10,
  }
})