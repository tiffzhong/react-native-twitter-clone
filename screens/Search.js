import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { colors } from "../config/styles";

const styles = StyleSheet.create({
  // styles
});

class Search extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Search</Text>
        <Button
          title="Post A Tweet"
          onPress={() => this.props.navigation.navigate("PostTweet")}
        />
      </View>
    );
  }
}

export default Search;
