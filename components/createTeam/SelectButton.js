import React from 'react';
import { connect } from "react-redux";
import { colorAdd , getData} from "../../actions/userAction";
import {
  Button,
  Text,
  TextInput,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
// import RNPickerSelect from './debug';

const sports = [
  {
    label: 'Football',
    value: 'football',
  },
  {
    label: 'Baseball',
    value: 'baseball',
  },
  {
    label: 'Hockey',
    value: 'hockey',
  },
];

class SelectButton extends React.Component {
  constructor(props) {
    super(props);

    this.inputRefs = {
      firstTextInput: null,
      favSport0: null,
      favSport1: null,
      lastTextInput: null,
    };

    this.state = {
      numbers: [
        {
          label: 'naranja',
          value: "orange",
          color: 'orange',
        },
        {
          label: 'Green',
          value: 'green',
          color: 'green',
        },
      ],
      favNumber: undefined,
    };
  }
  componentDidUpdate(prevProps , prevState) {
    if (this.state.favNumber !== prevState.favNumber) { 
        
        this.props.colorAdd(
            this.state.favNumber
        );
        this.props.getData();

        console.log(this.props.userReducer, "REDUCER!")
    }
  }
  render() {
    const placeholder = {
      label: 'Selecciona un color...',
      value: null,
      color: '#9EA0A4',
    };

    return (
      <ScrollView style={styles.container}>
        <Text>Color</Text>
        <RNPickerSelect
          style={{
            ...pickerSelectStyles,
            iconContainer: {
              top: 10,
              right: 12,
            },
          }}
          placeholder={placeholder}
          items={this.state.numbers}
          onValueChange={value => {
            this.setState({
              favNumber: value,
            });
            console.log(value)           
          }}
          style={pickerSelectStyles}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
});



const pickerSelectStyles = StyleSheet.create({
    inputAndroid: {
        borderWidth: 0.5,
        borderColor: 'red',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
      },
});

const mapStateToProps = state => {
    return {
      userReducer: state.userReducer
    };
  };
  
export default connect(mapStateToProps,
    { colorAdd , getData })(SelectButton)
