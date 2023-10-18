import { StyleSheet } from "react-native";
import colors from "../../utils/globalColors";

const HomeStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.primaryGrey,
  },

  itemContainer: {
    flexDirection: "column",
    height: '100%',
  }
})

export default HomeStyle;
