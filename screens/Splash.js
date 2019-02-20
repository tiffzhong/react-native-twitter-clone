import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
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
  },
  button: {
    paddingVertical: 10,
    backgroundColor: colors.buttonBackground,
    borderRadius: 100,
    width: 350,
    marginTop: 30
  },
  buttonText: {
    color: colors.buttonText,
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold"
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
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate("Dashboard")}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default Splash;
