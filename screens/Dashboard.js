import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

class Dashboard extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is the dashboard</Text>
        <Button
          title="Splash"
          onPress={() => this.props.navigation.navigate("Splash")}
        />
        <Button
          title="Post A Tweet"
          onPress={() => this.props.navigation.navigate("PostTweet")}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
export default Dashboard;
