import React from "react";
import { View, Text, Image } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from "../../../utils/globalColors";
import style from "./style";

const ProducerInfo = ({ producerImage, name, rating }) => {
  const starFillPercentage = (rating / 5) * 100 / 2;

  return (
    <View style={style.mainContainer}>
      <Image
        source={{ uri: producerImage }}
        style={style.producerImage}
      />
      <Text style={style.producerNameText}>{name}</Text>
      <View style={style.starContainer}>
        <Text style={style.ratingText}>{rating}</Text>
        <Icon
          name="star"
          style={[
            style.starIcon,
            { color: colors.yellow, width: starFillPercentage + "%" },
          ]}
        />
      </View>
    </View>
  );
};

export default ProducerInfo;
