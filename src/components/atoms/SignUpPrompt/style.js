import { StyleSheet } from "react-native";
import colors from "../../../utils/globalColors";

const SignUpPromptStyle = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
  },

  text: {
    fontSize: 16,
    width: "auto",
  },

  signUpText: {
    color: colors.primaryVariant,
    paddingLeft: 8,
    height: 30,
    width: 100,
    fontSize: 16,
  }
})

export default SignUpPromptStyle;
