import { StyleSheet } from "react-native";
import { colors } from "../../config/styles";

export default StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: colors.buttonBackground,
    margin: 5,
    borderRadius: 100,
    width: 350
  },
  buttonText: {
    color: colors.buttonText,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: colors.fontFamily
  }
});
