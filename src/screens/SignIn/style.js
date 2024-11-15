import { StyleSheet } from "react-native";
import colors from "../../utils/globalColors";
import { Colors } from "react-native/Libraries/NewAppScreen";

const SignInStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },

  invalidField: {
    borderBottomWidth: 3,
    borderColor: colors.error,
  },

  logoContainer: {
    alignItems: "center",
    padding: 20,
    marginTop: 30,
  },

  inputContainer: {
    flexDirection: "column",
    paddingHorizontal: 15,
    paddingVertical: 30,
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
