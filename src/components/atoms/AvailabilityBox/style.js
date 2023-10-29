import { StyleSheet } from "react-native";
import colors from "../../../utils/globalColors";

const AvailabilityBoxStyle = StyleSheet.create({
  container: {
    borderRadius: 16,
    height: 30,
    paddingHorizontal: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: colors.black,
    fontWeight: "500",
    fontSize: 12,
  },
});

export default AvailabilityBoxStyle;
