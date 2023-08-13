import { StyleSheet } from "react-native";
import colors from "../../utils/globalColors";

const SignInStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },

  logoContainer: {
    alignItems: "center",
    padding: 20,
    marginTop: 30,
  },

  inputContainer: {
    flexDirection: "column",
    paddingHorizontal: 15,
    paddingVertical: 50,
    gap: 20,
  },

  loginContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: 20,
    marginBottom: 60,
  }
})

export default SignInStyle;
