import React from 'react';
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

export default class App extends React.Component {
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
          label: 'Orange',
          value: "orange",
          color: 'orange',
        },
        {
          label: 'Green',
          value: 'green',
          color: 'green',
        },
      ],
      favSport0: undefined,
      favSport1: undefined,
      favSport2: undefined,
      favSport3: undefined,
      favSport4: 'baseball',
      favNumber: undefined,
    };
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
        {/* and iOS onUpArrow/onDownArrow toggle example */}
        <RNPickerSelect
        style={styles.picker}
          placeholder={placeholder}
          items={this.state.numbers}
          onValueChange={value => {
            this.setState({
                favNumber: value,
            });
          }}
          onUpArrow={() => {
            this.inputRefs.firstTextInput.focus();
          }}
          onDownArrow={() => {
            this.inputRefs.favSport1.togglePicker();
          }}
          style={pickerSelectStyles}
          value={this.state.favSport0}
          ref={el => {
            this.inputRefs.favSport0 = el;
          }}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 5
  },
});

const picker = StyleSheet.create({
    btn: {
        
    }
})

const pickerSelectStyles = StyleSheet.create({
  inputAndroid: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'red',
    borderRadius: 8,
    color: 'black'
  },
});
