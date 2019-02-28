import React from "react";
import { AuthSession } from "expo";
import { StyleSheet, Text, View, Image, Button, Login } from "react-native";
import { colors } from "../config/styles";
import { connect } from "react-redux";
import { setAccessCode } from "../dux/reducer";
import axios from "axios";

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
    const result = await AuthSession.startAsync({
      authUrl:
        `https://samrosenthal.auth0.com/authorize?response_type=token` +
        `&client_id=r1HvDIE2AYd2osIBSAjibUnRSj25N4Nu` +
        `&redirect_uri=${encodeURIComponent(redirectUrl)}` +
        `&scope=openid%20profile`
    });

    if (result.type === "success") {
      this.handleParams(result);
    }
  };

  handleParams = responseObj => {
    if (responseObj.error) {
      console.log(responseObj);
      return;
    }

    // have to save this access token in redux so a user can modify their profile. ---responseObj.params.access_token
    axios
      .get(
        `https://samrosenthal.auth0.com/userinfo?access_token=${
          responseObj.params.access_token
        }`
      )
      .then(response => {
        // console.log("response from fetch", response.data);
        this.props.setAccessCode(responseObj.params.access_token);
        this.setState({
          access_code: responseObj.params.access_token,
          username: response.data.name
        });
      })
      .catch(e => {
        console.log(e, "error from axios get");
      });
  };

  render() {
    let logo = {
      uri: "https://cdn2.iconfinder.com/data/icons/minimalism/512/twitter.png"
    };
    // console.log(this.state);
    // console.log(this.props);
    return (
      <View style={styles.container}>
        <Image source={logo} style={styles.logoImg} />
        <Text style={styles.main}>
          See what's happening in the world right now.
        </Text>
        <Button title="Login" onPress={this._loginWithAuth0Twitter} />
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    access_code: state.access_code
  };
};

const mapDispatchToProps = {
  setAccessCode
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
