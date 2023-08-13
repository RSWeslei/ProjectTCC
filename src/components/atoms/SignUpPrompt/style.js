import { StyleSheet } from "react-native";
import colors from "../../../utils/globalColors";

const SignUpPromptStyle = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
  },

  text: {
    fontSize: 16,
  },

  signUpText: {
    color: colors.primaryVariant,
    paddingLeft: 8,
    height: 30,
    width: 100,
  }
})

export default SignUpPromptStyle;
