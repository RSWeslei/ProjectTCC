import { StyleSheet } from 'react-native';
import colors from '../../utils/globalColors';

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  inputContainer: {
    flexDirection: "column",
    paddingHorizontal: 15,
    paddingVertical: 30,
    gap: 20,
  },
  inputField: {
    marginBottom: 15,
  },
  loginContainer: {
    alignItems: 'center',
  },
  getLocationButton: {
    alignItems: 'center',
    marginTop: 10,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  getLocationText: {
    fontSize: 16,
    marginLeft: 10,
    color: colors.primary,
  },
  headerText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.primary,
    textAlign: 'center',
  },
});

export default style;
