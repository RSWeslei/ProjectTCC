import { StyleSheet } from "react-native";
import colors from "../../utils/globalColors";
import { Colors } from "react-native/Libraries/NewAppScreen";

const UserStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },

  cardsContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: 'auto',
    padding: 6,
    marginBottom: 30,
    borderRadius: 10,
  },
})

export default UserStyle;
