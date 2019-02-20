import React from "react";
import { AuthSession } from "expo";
import { StyleSheet, Text, View, Image, Button, Login } from "react-native";
import { colors } from "../config/styles";

import axios from "axios";
// import { AUTH_CLIENT_DOMAIN, AUTH_CLIENT_ID } from "react-native-dotenv";
// ApiClient.init(AUTH_CLIENT_DOMAIN, AUTH_CLIENT_ID);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background
  },
  main: {
    fontSize: 30,
    textAlign: "center",
    color: colors.text,
    fontWeight: "bold"
  },
  bottomText: {
    fontSize: 16,
    color: colors.text,
    fontWeight: "100",
    paddingTop: 20
  },
  logoImg: {
    width: 50,
    height: 50,
    marginBottom: 20
  }
});

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null
    };
  }

  _loginWithAuth0Twitter = async () => {
    const redirectUrl = AuthSession.getRedirectUrl();
    console.log(encodeURIComponent(redirectUrl));
    // console.log("loginwithauth0twitter is running");
    const result = await AuthSession.startAsync({
      authUrl:
        `https://samrosenthal.auth0.com/authorize?response_type=token` +
        `&client_id=r1HvDIE2AYd2osIBSAjibUnRSj25N4Nu` +
        `&redirect_uri=${encodeURIComponent(redirectUrl)}` +
        `&scope=openid%20profile`
    });

    // console.log(result, "____________result____________");
    if (result.type === "success") {
      // console.log("if success is running", result);
      this.handleParams(result);
    }
  };

  handleParams = responseObj => {
    if (responseObj.error) {
      console.log(responseObj);
      return;
    }
    // console.log(responseObj, "___________look at me ______________-");
    axios
      .get(
        `https://samrosenthal.auth0.com/userinfo?access_token=${
          responseObj.params.access_token
        }`
      )
      .then(response => {
        console.log("response from fetch", response.data);
        // const encodedToken = response.id_token;
        // const decodedToken = jwtDecoder(encodedToken);
        // const username = decodedToken.name;
        // this.setState({ username });
      })
      .catch(e => {
        console.log(e, "error from axios get");
      });
  };

  render() {
    let logo = {
      uri: "https://cdn2.iconfinder.com/data/icons/minimalism/512/twitter.png"
    };
    console.log(this.state);
    return (
      <View style={styles.container}>
        <Image source={logo} style={styles.logoImg} />
        <Text style={styles.main}>
          See what's happening in the world right now.
        </Text>
        <Button title="Login" onPress={this._loginWithAuth0Twitter} />
        {/* <Text style={styles.bottomText}>Have an account already? Log in</Text> */}
      </View>
    );
  }
}
export default Splash;
