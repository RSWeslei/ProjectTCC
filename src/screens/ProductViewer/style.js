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
    width: "95%",
    marginTop: 5,
    alignSelf: "center",
  },
  lineDivider: {
    width: "95%",
    alignSelf: "center",
    height: 1.5,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: colors.primaryGrey,
  },
  descriptionContainer: {
    width: "95%",
    alignSelf: "center",
    marginTop: 10,
  },
  descriptionText: {
    fontSize: 14,
  },
  detailsContainer: {
    width: "95%",
    alignSelf: "center",
    flexDirection: "column",
  },
  detailTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
  },
  detailTextTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 8,
  },
  detailTextValue: {
    fontSize: 14,
    textAlign: "center",
    marginRight: 8,
  },
  producerContainer: {
    width: "95%",
    alignSelf: "center",
    marginTop: 4,
    flexDirection: "column",
  },
  producerTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  }
});

export default ProductViewerStyle;
