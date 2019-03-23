import React, { Component } from "react";
import { Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity, AsyncStorage } from 'react-native';
import styles from './Login.styles';
//import LoginGoogle from './Login.google'
import { connect } from "react-redux";
import { loginGet } from "../../actions/userAction";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: null, 
      password: null ,
      isNotAutheticated: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.userReducer.data[0] !== prevProps.userReducer.data[0]) {
      AsyncStorage.setItem('token', this.props.userReducer.data[0].token);
      this.props.navigation.navigate('Profile');
    }
    this._loadInitialState().done();
  }

  _loadInitialState = async () => {
    const value = await AsyncStorage.getItem('token');
    if (value !== null) {
      this.props.navigation.navigate('Profile');
    }
  }

  handleSubmit = () => {

    this.props.loginGet({
      nickname: this.state.nickname,
      password: this.state.password
    });
  };

  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
        <View style={styles.container}>
          <Text style={styles.header}> - LOGIN -</Text>
          <TextInput
            style={styles.textInput}
            placeholder='Username'
            onChangeText={ nickname => this.setState({ nickname }) }
            underlineColorAndroid='transparent'
          />
          <TextInput
            style={styles.textInput}
            placeholder='Password'
            onChangeText={ password => this.setState({ password }) }
            underlineColorAndroid='transparent'
          />
          <TouchableOpacity
            style={styles.btn}
            onPress={this.handleSubmit}
          >
          <Text>Log in</Text>
          </TouchableOpacity>
          {/*<LoginGoogle/>*/}
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = state => {
  return {
    userReducer: state.userReducer
  };
};

export default connect (
  mapStateToProps,
  { loginGet }
)(Login);