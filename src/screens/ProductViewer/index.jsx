import React, {useEffect, useState} from 'react';
import {View, Image, Text, BackHandler} from 'react-native';
import style from './style';
import LogoSVG from '../../assets/images/main-logo.svg';
import ItemCard from "../../components/molecules/ItemCard";
import Filter from "../../components/organisms/Filter";
import AvailabilityBox from "../../components/atoms/AvailabilityBox";
import Price from "../../components/atoms/Price";

const ProductViewer = ({route}) => {
  const { item } = route.params;
  return (
    <View style={style.mainContainer}>
      <View style={style.imageContainer}>
        <Image
          source={require("../../assets/images/toma.jpg")}
          // source={{uri: item.image}}
          style={style.productImage}
        />
      </View>
      <View style={style.nameContainer}>
        <Text style={style.productNameText}>
          {item.name}
        </Text>
        <AvailabilityBox isAvailable={true} />
      </View>
      <View style={style.priceContainer}>
        <Price
          price={item.price}
          measure={item.measure}
        />
      </View>
      <View style={style.lineDivider}/>
      <View style={style.descriptionContainer}>
        <Text style={style.descriptionText}>
          {item.description}
        </Text>
      </View>
    </View>
  );
};

export default ProductViewer;
