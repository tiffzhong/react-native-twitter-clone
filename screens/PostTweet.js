import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { colors } from "../config/styles";

class PostTweet extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Post Tweet What's happening?</Text>
      </View>
    );
  }
}

export default PostTweet;
