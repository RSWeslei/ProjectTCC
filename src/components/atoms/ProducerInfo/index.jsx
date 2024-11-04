import React from "react";
import { View, Text, Image } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from "../../../utils/globalColors";
import style from "./style";
import {loadImage} from '../../../services/fetchService'

const ProducerInfo = ({ image, name, showDistance = false, distance }) => {
    return (
    <View style={style.mainContainer}>
      <Image
        source={{ uri: loadImage(image) }}
        style={style.producerImage}
      />
      <Text style={style.producerNameText}>{name}</Text>
      {showDistance && (
        <View style={style.distanceContainer}>
          <Icon
            name="location-arrow"
            style={style.distanceIcon}
          />
          <Text style={style.distanceText}>{distance} km</Text>
        </View>
      )}
    </View>
    );
};

export default ProducerInfo;
