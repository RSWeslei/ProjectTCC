import {
  Text,
  View,
  TouchableOpacity
} from "react-native";
import colors from "../../../utils/globalColors";
import styles from "./style";

const MainButton = ({text='Default', onPress = () => {}}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.mainContainer}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

export default MainButton;
