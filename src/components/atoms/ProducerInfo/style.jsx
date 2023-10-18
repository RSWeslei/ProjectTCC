import { StyleSheet } from "react-native";
import colors from "../../../utils/globalColors";

const ProducerInfoStyle = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  producerImage: {
    width: 25,
    height: 25,
    marginRight: 5,
    borderRadius: 15,
  },
  producerNameText: {
    fontSize: 15,
    fontWeight: "bold",
    marginRight: 20,
    color: colors.blackVariantOne,
  },
  ratingText: {
    fontSize: 15,
    fontWeight: "bold",
    color: colors.yellow,
    marginRight: 5,
  },
  starContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 50,
  },
  starIcon: {
    fontSize: 18,
  },
});

export default ProducerInfoStyle;
