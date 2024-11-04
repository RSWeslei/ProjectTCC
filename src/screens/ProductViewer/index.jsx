import React, {useEffect, useState} from 'react';
import {View, Image, Text, BackHandler} from 'react-native';
import style from './style';
import LogoSVG from '../../assets/images/main-logo.svg';
import ItemCard from "../../components/molecules/ItemCard";
import Filter from "../../components/organisms/Filter";
import AvailabilityBox from "../../components/atoms/AvailabilityBox";
import Price from "../../components/atoms/Price";
import ProducerInfo from "../../components/atoms/ProducerInfo";
import GoogleMapsButton from "../../components/atoms/GoogleMapsButton";

const ProductViewer = ({route}) => {
  const { item } = route.params;
  return (
    <View style={style.mainContainer}>
      <View style={style.imageContainer}>
        <Image
            source={typeof item.image === 'number' ? item.image : { uri: item.image }}
          style={style.productImage}
        />
      </View>
      <View style={style.nameContainer}>
        <Text style={style.productNameText}>
          {item.name}
        </Text>
        <AvailabilityBox isAvailable={true}/>
      </View>
      <View style={style.priceContainer}>
        <Price
          price={item.price}
          measure={item.measure}
        />
      </View>
      <View style={style.descriptionContainer}>
        <Text style={style.descriptionText}>
          {item.description}
        </Text>
      </View>
      <View style={style.lineDivider}/>
      <View style={style.detailsContainer}>
        <View style={style.detailTextContainer}>
          <Text style={style.detailTextTitle}>
            Categoria:
          </Text>
          <Text style={style.detailTextValue}>
            {item.category || "Não informado"}
          </Text>
        </View>
        <View style={style.detailTextContainer}>
          <Text style={style.detailTextTitle}>
            Possui Agrotóxicos?
          </Text>
          <Text style={style.detailTextValue}>
            {item.hasPesticides ? "Sim" : "Não" || "Não informado"}
          </Text>
        </View>
      </View>
      <View style={style.lineDivider}/>
      <View style={style.producerContainer}>
        <Text style={style.producerTitle}>
          Produtor
        </Text>
        <ProducerInfo
          producerImage={"data:image/jpeg;base64,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"}
          name={item.producer.name}
          rating={item.producer.rating}
          showDistance={true}
        ></ProducerInfo>
      </View>
      <View style={{justifyContent: 'flex-end', flex: 1, marginBottom: 15}}>
        <GoogleMapsButton coordinates={item.producer.coordinates || {latitude: -27.38489999871777, longitude: -65.57884181941424}} />
      </View>
    </View>
  );
};

export default ProductViewer;
