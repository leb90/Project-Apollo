import React, { Component } from "react";
import { Text, View } from 'react-native';
import styles from './Profile.styles';

class Profile extends Component {

  render() {
    return (
    <View style={styles.container}>
        <Text style={styles.text}> - Profile -</Text>
    </View>
    );
  }
}

export default Profile;