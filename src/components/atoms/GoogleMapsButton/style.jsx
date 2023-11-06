import { StyleSheet } from "react-native";
import colors from "../../../utils/globalColors";

const GoogleMapsButtonStyle = StyleSheet.create({
  button: {
    backgroundColor: colors.primaryBlue,
    borderRadius: 26,
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: 300,
    alignSelf: "center",
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default GoogleMapsButtonStyle;
