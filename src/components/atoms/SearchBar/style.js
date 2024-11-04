import {StyleSheet} from 'react-native'
import colors from '../../../utils/globalColors'

const SearchBarStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.secondaryGrey,
    padding: 5,
    margin: 10,
    borderRadius: 5,
  },
  input: {
    flex: 1,
    height: 40,
    padding: 8,
    backgroundColor: colors.white,
    borderRadius: 5,
    marginRight: 5,
  },
  searchButton: {
    padding: 8,
    backgroundColor: colors.primary,
    borderRadius: 5,
  },
  closeButton: {
    padding: 8,
    backgroundColor: colors.error,
    borderRadius: 5,
    marginLeft: 5,
  }
})

export default SearchBarStyle
