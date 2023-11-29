import { StyleSheet } from "react-native";
import colors from "../../../utils/globalColors";
import { Colors } from "react-native/Libraries/NewAppScreen";

const UserImageStyle = StyleSheet.create({
  mainContainer: {
    justifyContent: "flex-end",
    alignItems: "center",
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: colors.primary,
    margin: 10,
  },

  usernameText: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.blackVariantOne,
  },

  subtitleText: {
    fontSize: 17,
    color: colors.primary,
    fontWeight: "bold",
  }
})

export default UserImageStyle;
