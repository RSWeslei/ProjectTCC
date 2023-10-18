import { StyleSheet } from "react-native";
import colors from "../../../utils/globalColors";

const ItemCardStyle = StyleSheet.create({
  mainContainer: {
    height: 120,
    backgroundColor: colors.white,
    borderRadius: 10,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    margin: 6,
  },
  infoContainer: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 10,
    height: '100%',
  },
  productNameText: {
    fontSize: 20,
    color: colors.black,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  priceContainer: {
    marginTop: 5,
  },
  producerInfoContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 8,
  }
})

export default ItemCardStyle;
