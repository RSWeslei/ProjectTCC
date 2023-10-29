import { StyleSheet } from 'react-native';
import colors from "../../../utils/globalColors";

const FilterStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    margin: 5,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 50,
    alignSelf: "center",
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  priceText: {
    fontSize: 15,
    fontWeight: "bold",
    marginStart: 10,
  },
  slider: {
    width: "100%",
    height: 30,
  }
});

export default FilterStyle;
