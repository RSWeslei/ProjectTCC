import { StyleSheet } from "react-native";
import colors from "../../../utils/globalColors";
import { Colors } from "react-native/Libraries/NewAppScreen";

const UserConfigCardStyle = StyleSheet.create({
  mainContainer: {
    height: 70,
    width: "95%",
    backgroundColor: colors.white,
    borderRadius: 10,
    margin: 6,
    elevation: 2,
    flexDirection: "column",
    textAlign: "center",
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: 'grey',
    marginHorizontal: 10,
    marginTop: 10,
  },

  subtitle: {
    fontSize: 14,
    color: colors.secondaryGrey,
    marginHorizontal: 10,
  },
})

export default UserConfigCardStyle;
