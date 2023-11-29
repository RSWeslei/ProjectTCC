import {
  Text, TouchableOpacity,
  View,
} from "react-native";
import colors from "../../../utils/globalColors";
import styles from "./style";

const UserConfigCard = ({data = {}, onPress = () => {}}) => {
  return (
    <TouchableOpacity
      style={styles.mainContainer}
      onPress={onPress}
    >
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.subtitle}>{data.subtitle}</Text>
    </TouchableOpacity>
  );
}

export default UserConfigCard;
