import React from "react";
import { AuthSession } from "expo";
import Button from "../components/Button";
import { StyleSheet, Text, View, Image } from "react-native";
import { colors } from "../config/styles";
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

const auth0ClientId = "16123618";
const auth0Domain = "samrosenthal.auth0.com";

function toQueryString(params) {
   return (
      "?" +
      Object.entries(params)
         .map(
            ([key, value]) =>
               `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
         )
         .join("&")
   );
}

class Splash extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         username: null
      };
   }

   _loginWithAuth0Twitter = async () => {
      const redirectUrl = AuthSession.getRedirectUrl();
      console.log("loginwithauth0twitter is running");
      const result = await AuthSession.startAsync({
         authUrl:
            `${auth0Domain}/authorize` +
            toQueryString({
               connection: "twitter",
               client_id: auth0ClientId,
               response_type: "token",
               scope: "openid name",
               redirect_uri: encodeURIComponent(redirectUrl)
            })
      });

      console.log(result, "____________result____________");
      if (result.type === "success") {
         console.log("if success is running");
         this.handleParams(result.params);
      }
   };

   handleParams = responseObj => {
      console.log("handle params is running");
      if (responseObj.error) {
         Alert.alert(
            "Error",
            responseObj.error_description ||
               "something went wrong while logging in"
         );
         return;
      }
      const encodedToken = responseObj.id_token;
      const decodedToken = jwtDecoder(encodedToken);
      const username = decodedToken.name;
      this.setState({ username });
   };

   render() {
      let logo = {
         uri:
            "https://cdn2.iconfinder.com/data/icons/minimalism/512/twitter.png"
      };
      return (
         <View style={styles.container}>
            <Image source={logo} style={styles.logoImg} />
            <Text style={styles.main}>
               See what's happening in the world right now.
            </Text>
            <Button text="Login" onPress={this._loginWithAuth0Twitter} />
            {/* <Text style={styles.bottomText}>Have an account already? Log in</Text> */}
         </View>
      );
   }
}
// Splash.propTypes = {
//   navigation: React.PropTypes.object
// };

export default Splash;
