import React from "react";
import {
  StyleSheet,
  FlatList,
  SectionList,
  Text,
  View,
  ScrollView,
  Button,
} from "react-native";
import { NavigationContainer, Navigator } from "react-navigation";
import { createStackNavigator, Stack } from "react-navigation-stack";
import { Screen } from "react-native-screens";
import ContactsList from "../contactsList";

export default class ContactsListScreen extends React.Component {
  // state = {
  //   showContacts: true,
  // };
  onSort = () => {
    this.setState((state) => ({
      contacts: [...state.contacts].sort(compareNames),
    }));
  };
  // onToggle = () => {
  //   this.setState((state) => ({ showContacts: !state.showContacts }));
  // };
  onToggleForm = () => {
    this.props.navigation.navigate("AddContact");
  };
  render() {
    return (
      <View style={styles.container}>
        {/*<Button title="Toggle contacts" onPress={this.onToggle} />*/}
        {/*<Button title="Add contact" onPress={this.onToggleForm} />*/}
        {/*{this.state.showContacts && (
          <ContactsList contacts={this.props.screenProps.contacts} />
        )}*/}
        <ContactsList
          contacts={this.props.screenProps.contacts}
          onSelectContact={(contact) => {
            this.props.navigation.navigate("ContactDetails",{phone:contact.phone,name:contact.name});
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    fontSize: 150,
  },
});
