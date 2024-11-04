import {
  Image,
  Text, TouchableOpacity,
  View,
} from "react-native";
import colors from "../../../utils/globalColors";
import styles from "./style";

const UserImage = ({data = {}}) => {
  const isProducer = true;
  return (
    <View style={styles.mainContainer}>
      <Image source={require("../../../assets/images/190683.png")} style={styles.image} />
      <Text style={styles.usernameText}>Nome do usuário</Text>
      <Text style={styles.subtitleText}>{isProducer ? "Produtor" : "Consumidor"}</Text>
    </View>
  );
}

export default UserImage;
