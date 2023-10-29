import { StyleSheet } from "react-native";
import colors from "../../../utils/globalColors";

const styles = StyleSheet.create({
  markerContainer: {
    alignItems: 'center',
  },
  textContainer: {
    backgroundColor: colors.primaryGrey,
    borderRadius: 5,
    padding: 5,
    marginBottom: 5,
  },
  text: {
    fontWeight: 'bold',
  },
  iconContainer: {
    justifyContent: 'center',
  },
  icon: {
    width: 70,
    height: 70,
    padding: 20,
    backgroundColor: 'blue',
  },
});

export default styles;
