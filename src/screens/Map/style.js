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
});

export default MapStyle;
