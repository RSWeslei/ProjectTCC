import { StyleSheet } from "react-native";
import colors from "../../../utils/globalColors";

const InputFieldStyle = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.primaryGrey,
    borderRadius: 5,
    marginHorizontal: 20,
    height: 45,

  },

  icon: {
    paddingLeft: 10,
    paddingRight: 4,
    height: '100%',
    textAlignVertical: 'center',
    width: 30,
  },

  secondIcon: {
    paddingRight: 10,
    height: '100%',
    textAlignVertical: 'center',
  },

  textInput: {
    flex: 1,
    opacity: 0.8,
    fontSize: 15,
  }

})

export default InputFieldStyle;
