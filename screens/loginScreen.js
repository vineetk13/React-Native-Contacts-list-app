import React from "react";
import { Button, View, StyleSheet, Text, TextInput } from "react-native";

export default class LoginScreen extends React.Component {
  state={
    username:'',
    password:'',
  }
  handleUsernameChange = username => {
    this.setState({username})
  }
  handlePasswordChange = password => {
    this.setState({password})
  }
  _login = () => {
    this.props.navigation.navigate("Main");
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>You are currently logged out</Text>
        <TextInput style={styles.input} value={this.state.username} onChangeText={this.handleUsernameChange} />
        <TextInput style={styles.input} value={this.state.password} onChangeText={this.handlePasswordChange} />
        <Button title="Log in" onPress={this._login} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    borderColor: 'blue',
    borderWidth: 1.5,
    padding: 5,
    borderRadius: 7,
    marginBottom: 10,
    width: '90%',
  },
  container: {
    justifyContent: "center",
    alignItems:'center',
    flex: 1,
  },
  text: {
    textAlign: "center",
  },
});
