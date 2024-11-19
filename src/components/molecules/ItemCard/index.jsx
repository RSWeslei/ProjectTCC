import {
  Text, TouchableOpacity,
  View,
  Image
} from "react-native";
import styles from "./style";
import ProducerInfo from "../../atoms/ProducerInfo";
import Price from "../../atoms/Price";
import {loadImage} from '../../../services/fetchService'

const ItemCard = ({ item = {}, navigation}) => {
  const imageUrl = loadImage(item.imagePath);
  return (
    <TouchableOpacity
      style={styles.mainContainer}
      onPress={() => {
        navigation.navigate("ProductViewer", { item: item })
      }}
    >
      <Image
          source={{ uri: imageUrl }}
          style={styles.productImage}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.productNameText}>
          {item.name}
        </Text>
        <View style={styles.priceContainer}>
          <Price
            price={item.price}
            measure={item.measure}
          />
        </View>
        <View style={styles.producerInfoContainer}>
          <ProducerInfo
            image={item.producer.imagePath}
            name={item.producer.user.name}
          />
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ItemCard;
