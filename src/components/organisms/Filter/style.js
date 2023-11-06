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
    marginRight: 10,
  },
  sliderContainer: {
    alignItems: "center",
  },
  priceText: {
    fontSize: 15,
    fontWeight: "bold",
    marginStart: 10,
  },
  slider: {
    width: "100%",
    height: 40,
  },
  distanceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    marginRight: 10,
  },
  distanceText: {
    fontSize: 15,
    fontWeight: "bold",
    marginStart: 10,
  },
  pesticidesContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  pesticidesText: {
    fontSize: 15,
    fontWeight: "bold",
    marginStart: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginStart: 10,
    marginTop: 10,
  },
  applyButtonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 10,
  },
  clearButton: {
    alignSelf: 'center',
    width: 120,
    height: 35,
    borderRadius: 10,
    backgroundColor: colors.error,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  clearButtonText: {
    color: colors.white,
    fontWeight: 'bold',
  },
  applyButton: {
    backgroundColor: colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  applyButtonText: {
    color: colors.white,
    fontWeight: 'bold',
  },
});

export default FilterStyle;
