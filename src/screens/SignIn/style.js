import { StyleSheet } from "react-native";
import colors from "../../utils/globalColors";

const SignInStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 20,
    gap: 20,
  },

  loginContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  }
})

export default SignInStyle;
