import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
import React, { Component } from "react";

class  LoginGoogle extends Component {

  async componentDidMount() {
    this._configureGoogleSignIn();
    await this._getCurrentUser();
	}
	

	render() {		
		return (
			<View>
				<GoogleSigninButton
					style={{ width: 212, height: 48 }}
					size={GoogleSigninButton.Size.Standard}
					color={GoogleSigninButton.Color.Auto}
					onPress={this._signIn}
				/>
			</View>
		);
	}
}


export default LoginGoogle;