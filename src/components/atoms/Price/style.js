import { StyleSheet } from "react-native";
import colors from "../../../utils/globalColors";

const PriceStyle = StyleSheet.create({
  mainContainer: {
    flexDirection: "row", // To display price and measure side by side
  },
  priceText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: 'bold'
  },
  measureText: {
    color: colors.black,
    fontSize: 16,
    fontWeight: 'bold'
  },
});

export default PriceStyle;
