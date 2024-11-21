import React from "react";
import { Text, View } from "react-native";
import styles from "./style";

const Price = ({ price, measure}) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.priceText}>{`R$ ${price} `}</Text>
      <Text style={styles.measureText}>{measure}</Text>
    </View>
  );
};

export default Price;
