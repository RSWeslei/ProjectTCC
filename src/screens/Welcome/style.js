import { StyleSheet, Dimensions } from "react-native";
import colors from "../../utils/globalColors";

const screenWidth = Dimensions.get("window").width;

const WelcomeStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    marginTop: -100,
  },
  image: {
    flex: 1,
  },
  imageContainer: {
    width: screenWidth,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 150,
  },
  infoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.welcomeDotInactive,
    margin: 5,
  },
  activeDot: {
    width: 25,
    height: 10,
    borderRadius: 6,
    backgroundColor: colors.welcomeDotActive,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    width: "80%",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: colors.secondaryGrey,
    marginBottom: 20,
    width: "80%",
    textAlign: "center",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 80,
  }
});

export default WelcomeStyle;
