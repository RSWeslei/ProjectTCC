import React, { useEffect, useState } from 'react';
import { View, Image, Text } from 'react-native';
import style from './style';
import AvailabilityBox from "../../components/atoms/AvailabilityBox";
import Price from "../../components/atoms/Price";
import ProducerInfo from "../../components/atoms/ProducerInfo";
import GoogleMapsButton from "../../components/atoms/GoogleMapsButton";
import { loadImage } from '../../services/fetchService';
import { calculateDistance } from '../../utils/map';
import Geolocation from "react-native-geolocation-service";

const ProductViewer = ({ route }) => {
  const { item } = route.params;
  const [currentLocation, setCurrentLocation] = useState(null);
  const [distance, setDistance] = useState(null);

  useEffect(() => {
    Geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ latitude, longitude });
        },
        (error) => {
          console.error('Erro ao obter localização:', error);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }, []);

  useEffect(() => {
    if (currentLocation && item.producer.address) {
      const producerLatitude = parseFloat(item.producer.address.latitude);
      const producerLongitude = parseFloat(item.producer.address.longitude);
      const calculatedDistance = calculateDistance(
          currentLocation.latitude,
          currentLocation.longitude,
          producerLatitude,
          producerLongitude
      );
      console.log(calculatedDistance.toFixed(2))
      setDistance(calculatedDistance.toFixed(2));
    }
  }, [currentLocation, item]);

  return (
      <View style={style.mainContainer}>
        <View style={style.imageContainer}>
          <Image
              source={{ uri: loadImage(item.imagePath) }}
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
        <View style={style.descriptionContainer}>
          <Text style={style.descriptionText}>
            {item.description}
          </Text>
        </View>
        <View style={style.lineDivider} />
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
        <View style={style.lineDivider} />
        <View style={style.producerContainer}>
          <Text style={style.producerTitle}>
            Produtor
          </Text>
          <ProducerInfo
              image={item.producer.imagePath}
              name={item.producer.user.name}
              distance={distance}
              showDistance={true}
          />
        </View>
        <View style={{ justifyContent: 'flex-end', flex: 1, marginBottom: 15 }}>
          <GoogleMapsButton
              coordinates={{
                latitude: parseFloat(item.producer.address.latitude),
                longitude: parseFloat(item.producer.address.longitude)
              }}
          />
        </View>
      </View>
  );
};

export default ProductViewer;
