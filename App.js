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
import {
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
} from "react-navigation";
import Constants from "expo";
import { MaterialIcons } from "react-native-vector-icons";
//import contacts, { compareNames } from "./contacts";
import AddContactScreen from "./screens/addContactScreen";
import ContactsListScreen from "./screens/contactListScreen";
import ContactDetailsScreen from "./screens/contactDetailsScreen";
import LoginScreen from "./screens/loginScreen";
import SettingsScreen from "./screens/settingsScreen";
import { fetchUsers } from "./api";

const ContactsTab = createStackNavigator(
  {
    AddContact: {
      screen: AddContactScreen,
      navigationOptions: () => ({
        title: `Add contact`,
      }),
    },
    ContactList: {
      screen: ContactsListScreen,
      navigationOptions: ({ navigation }) => ({
        title: `My contacts`,
        headerBackTitle: null,
        headerRight: (
          <Button
            title="Add"
            onPress={() => {
              navigation.navigate("AddContact");
            }}
          />
        ),
        headerStyle: { paddingRight: 15 },
        headerRightContainerStyle: { padding: 5 },
      }),
    },
    ContactDetails: {
      screen: ContactDetailsScreen,
      navigationOptions: ({ navigation }) => ({
        title: navigation.getParam("name"),
      }),
    },
  },
  {
    initialRouteName: "ContactList",
  }
);

const MainNavigator = createBottomTabNavigator({
  Contacts: {
    screen: ContactsTab,
    navigationOptions: () => ({
      tabBarIcon: ({ tintColor }) => (
        <MaterialIcons name="contacts" size={26} color={tintColor} />
      ),
    }),
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: () => ({
      tabBarIcon: ({ tintColor }) => (
        <MaterialIcons name="settings" size={26} color={tintColor} />
      ),
    }),
  },
});

const AppNavigator = createSwitchNavigator(
  {
    Main: {
      screen: MainNavigator,
    },
    Login: {
      screen: LoginScreen,
    },
  },
  {
    initialRouteName: "Login",
  }
);

export default class App extends React.Component {
  state = {
    showContacts: false,
    contacts: null,
  };

  componentDidMount() {
    this.getUsers();
  }
  getUsers = async () => {
    const results = await fetchUsers();
    this.setState({ contacts: results });
  };

  addContact = (newContact) => {
    this.setState((state) => ({
      showForm: false,
      contacts: [...state.contacts, newContact],
    }));
  };

  render() {
    return (
      <AppNavigator
        screenProps={{
          contacts: this.state.contacts,
          addContact: this.addContact,
        }}
      />
    );
  }
}
