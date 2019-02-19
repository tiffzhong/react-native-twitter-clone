import React from "react";
import { TextInput } from "react-native";
import "./styles.js";
import styles from "./styles.js";

class GenericTextInput extends React.Component {
   render() {
      return (
         <TextInput
            placeholderTextColor="#38444d"
            borderBottomColor="#1DA1F2"
            style={styles.defaultInput}
            {...this.props}
         />
      );
   }
}

export default GenericTextInput;
