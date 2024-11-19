import {
  Image,
  Text,
  View,
} from "react-native";
import styles from "./style";

const UserImage = (data) => {
    data = data.data
    const isProducer = data.user.isProducer
    return (
        <View style={styles.mainContainer}>
          <Image
            source={require('../../../assets/images/190683.png')}
            style={styles.image}
          />
          <Text style={styles.usernameText}>{data.user.name}</Text>
          <Text style={styles.subtitleText}>
            {isProducer ? 'Produtor' : 'Consumidor'}
          </Text>
        </View>
    );
}

export default UserImage;
