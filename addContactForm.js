import React from 'react';
import {KeyboardAvoidingView, StyleSheet, Button, View, TextInput, Text } from 'react-native';

const styles = StyleSheet.create({
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 5,
    borderRadius: 7,
    marginBottom: 10,
    width: '90%',
  },
  form: {
    justifyContent: 'center',
    display:'flex',
    alignItems:'center',
    flex:1,
    flexDirection: 'column',
    marginTop: 35,
  },
});

export default class AddContactForm extends React.Component {
  state = {
    name: '',
    phone: '',
    showBtn: false,
  };

  handleNameChange = name => {
    this.setState({ name },this.add);
  };

  handlePhoneChange = phone => {
    if (+phone >= 0 && phone.length <= 10) this.setState({ phone },this.add);
  };

  add=()=>{
    if (  
      +this.state.phone >= 0 &&
      this.state.phone.length === 10 &&
      this.state.name.length >= 3
    ){
      this.setState({showBtn:true})
    }
    else{
      this.setState({showBtn:false})
    }
  }

  handleSubmit = () => {
    
      this.props.onSubmit({ name: this.state.name, phone: this.state.phone });
  };

  render() {
    return (
      <KeyboardAvoidingView behavior='height' style={styles.form}>
      <Text style={{color:'blue'}}>Name:</Text>
        <TextInput
          style={styles.input}
          onChangeText={this.handleNameChange}
          value={this.state.name}
        />
        <Text style={{color:'blue'}}>Phone:</Text>
        <TextInput
          style={styles.input}
          onChangeText={this.handlePhoneChange}
          value={this.state.phone}
          keyboardType="numeric"
        />

        <Button
          title="Add contact"
          onPress={this.handleSubmit}
          disabled={!this.state.showBtn}
        />
      </KeyboardAvoidingView>
    );
  }
}
