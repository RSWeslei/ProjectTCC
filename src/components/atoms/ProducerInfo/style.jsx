import { StyleSheet } from "react-native";
import colors from "../../../utils/globalColors";

const ProducerInfoStyle = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  producerImage: {
    width: 30,
    height: 30,
    marginRight: 5,
    borderRadius: 15,
  },
  producerNameText: {
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
    color: colors.blackVariantOne,
  },
  starIcon: {
    fontSize: 18,
  },
  distanceContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  distanceIcon: {
    fontSize: 17,
    color: colors.primaryBlue,
    marginRight: 5,
  },
  distanceText: {
    fontSize: 16,
    color: colors.blackVariantOne,
    alignContent: "center",
  },
  productsIconContainer: {
    marginLeft: 10,
  },
  productsIcon: {
    fontSize: 20,
    color: colors.primaryBlue,
    marginRight: 3
  }
});

export default ProducerInfoStyle;
