import { StyleSheet } from "react-native";
import colors from "../../utils/globalColors";
import { Colors } from "react-native/Libraries/NewAppScreen";

const SignUpStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },

  invalidField: {
    borderBottomWidth: 3,
    borderColor: colors.error,
  },

  invalidText: {
    color: colors.error,
    textAlign: "right",
    paddingRight: 20,
    paddingTop: 5,
    marginBottom: -10,
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

export default SignUpStyle;
