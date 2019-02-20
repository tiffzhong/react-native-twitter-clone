import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { colors } from "../config/styles";

const styles = StyleSheet.create({
  // styles
});

class DirectMessages extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Down in da DMs</Text>
        <Button
          title="Post A Tweet"
          onPress={() => this.props.navigation.navigate("PostTweet")}
        />
      </View>
    );
  }
}

export default DirectMessages;
