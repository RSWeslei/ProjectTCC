import { StyleSheet } from "react-native";
import colors from "../../../utils/globalColors";

const MainButtonStyle = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.primary,
    borderRadius: 15,
    height: 50,
    width: 300
  },

  text: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
  }

})

export default MainButtonStyle;
