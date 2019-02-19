import React from "react";
import Button from "../components/Button";
import { StyleSheet, Text, View, Image } from "react-native";
import { colors } from "../config/styles";

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
  render() {
    let logo = {
      uri: "https://cdn2.iconfinder.com/data/icons/minimalism/512/twitter.png"
    };
    return (
      <View style={styles.container}>
        <Image source={logo} style={styles.logoImg} />
        <Text style={styles.main}>
          See what's happening in the world right now.
        </Text>
        <Button
          text="Login"
          onPress={() => {
            props.navigation.navigate("SignIn");
          }}
        />
        {/* <Text style={styles.bottomText}>Have an account already? Log in</Text> */}
      </View>
    );
  }
}
// Splash.propTypes = {
//   navigation: React.PropTypes.object
// };

export default Splash;
