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
  },

  clearFilterButton: {
    padding: 10,
    backgroundColor: colors.error,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 10,
  },

  clearFilterText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },

})

export default HomeStyle;
