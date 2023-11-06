// MapStyle.js

import { StyleSheet } from 'react-native';
import colors from '../../utils/globalColors';

const MapStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.primaryGrey,
  },
  map: {
    flex: 1,
  },
  producerInfoContainer: {
    backgroundColor: colors.tertiaryGrey,
    width: '90%',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 15,
  }
});

export default MapStyle;
