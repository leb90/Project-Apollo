
import React, { Component } from "react";
import { Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity, AsyncStorage } from 'react-native';
import styles from './CreateTeam.styles';
//import LoginGoogle from './Login.google'
import { connect } from "react-redux";
import { loginGet } from "../../actions/userAction";
import SelectButton from "./SelectButton"

class CreateTeam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamName: null, 
      teamCheer: null,
      teamColors:[],
      formation:null,
      isNotAutheticated: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleReceiveColor= color=>{
    this.setState({
      teamColors: teamColors.push(color)
    })
  }
  handleSubmit(){
    console.log(this.state)
  }
  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
        <View style={styles.container}>
          <Text style={styles.header}> - Crear Equipo -</Text>
        
          <TextInput
           returnKeyType="next"
            style={styles.textInput}
            placeholder='Nombre del equipo'
            onChangeText={ teamName => this.setState({ teamName }) }
            underlineColorAndroid='transparent'
          />
          <TextInput
           returnKeyType="next"
            style={styles.textInput}
            placeholder='Nombre de la hinchada'
            onChangeText={ teamCheer => this.setState({ teamCheer }) }
            underlineColorAndroid='transparent'
          />
          <View style={styles.selectContainer}>
             <SelectButton/>
             <SelectButton/>
             <SelectButton/>
          </View>
         
          <TextInput
           returnKeyType="next"
            style={styles.textInput}
            placeholder='Formacion del equipo'
            onChangeText={ formation => this.setState({ formation }) }
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
)(CreateTeam);