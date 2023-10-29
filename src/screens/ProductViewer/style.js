import { StyleSheet } from 'react-native';
import colors from "../../utils/globalColors";

const ProductViewerStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  imageContainer: {
    height: 200,
    width: "98%",
    marginTop: 10,
    alignSelf: "center",
  },
  productImage: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  nameContainer: {
    backgroundColor: colors.secondaryGrey,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 10,
    width: "95%",
  },
  productNameText: {
    fontSize: 18,
    marginRight: 10,
  },
  priceContainer: {
    backgroundColor: colors.secondaryGrey,
    width: "95%",
    marginTop: 5,
    alignSelf: "center",
  },
  lineDivider: {
    width: "95%",
    alignSelf: "center",
    height: 1.5,
    backgroundColor: colors.secondaryGrey,
    marginTop: 10,
  },
  descriptionContainer: {
    backgroundColor: colors.secondaryGrey,
    width: "95%",
    alignSelf: "center",
    marginTop: 10,
    height: 100,
  },
  descriptionText: {
    fontSize: 14,
  }
});

export default ProductViewerStyle;
