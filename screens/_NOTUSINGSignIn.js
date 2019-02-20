import React from "react";
import { ScrollView, View, Text, StyleSheet, Dimensions } from "react-native";
import GenericTextInput from "../components/GenericTextInput/index";
import { red } from "ansi-colors";

class SignIn extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         name: "",
         phoneEmail: "",
         nameFocus: false,
         phoneEmailFocus: false
      };
   }

   toggleFocusName = () => {
      this.setState({
         nameFocus: !this.state.toggleFocusName
      });
   };
   togglePhoneEmailFocus = () => {
      this.setState({
         phoneEmailFocus: !this.state.phoneEmailFocus
      });
   };

   render() {
      const { name, phoneEmail, nameFocus, phoneEmailFocus } = this.state;
      return (
         <View style={styles.screen}>
            <ScrollView>
               <Text style={styles.title}>Create your account</Text>
            </ScrollView>
            <View style={styles.input}>
               <GenericTextInput
                  onFocus={this.toggleFocusName}
                  placeholder="Name"
                  onFocusplaceholder="Name"
                  maxLength={50}
                  style={nameFocus ? styles.inputFocus : null}
               />
               <GenericTextInput
                  onFocus={this.togglePhoneEmailFocus}
                  placeholder="Phone number or email address"
                  style={phoneEmailFocus ? styles.inputFocus : null}
               />
            </View>
         </View>
      );
   }
}

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
   input: {
      // borderBottomColor: "#1DA1F2",
      // alignSelf: "stretch",
      flex: 2
      // justifyContent: "center",
      // alignItems: "center"
      // width: "80%"
   },
   title: {
      marginTop: 85
   },
   screen: {
      flex: 1,
      width,
      alignItems: "center",
      justifyContent: "center"
      // backgroundColor: "#7AC36A"
   },
   inputFocus: {
      borderBottomWidth: 1,
      backgroundColor: "red",
      borderBottomColor: "#1DA1F2",
      // alignSelf: "stretch",
      height: 45,
      width: 350
   }
});

export default SignIn;