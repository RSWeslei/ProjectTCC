import React, { useEffect, useRef, useState } from "react";
import { FlatList, Image, View, Text,  SafeAreaView, StatusBar } from "react-native";
import { ScrollView } from 'react-native-gesture-handler'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapStyle from './style';
import colors from '../../utils/globalColors';
import Geolocation from 'react-native-geolocation-service';
import { useFocusEffect } from '@react-navigation/native';
import UserLocationMarker from "../../components/atoms/UserLocationMarker";
import BottomSheet from "@gorhom/bottom-sheet";
import ProducerInfo from "../../components/atoms/ProducerInfo";

const Map = ({ navigation }) => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const bottomSheetMapRef = useRef(null);

  const producersData = [
    {
      id: 1,
      name: 'Produtor 1',
      rating: 4.5,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkdzU2Q1d57jJ8X9llQbS47pBys4Bn6-VEYA&usqp=CAU'
    },
    {
      id: 2,
      name: 'Produtor 2',
      rating: 4.5,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkdzU2Q1d57jJ8X9llQbS47pBys4Bn6-VEYA&usqp=CAU'
    },
    {
      id: 3,
      name: 'Produtor 1',
      rating: 4.5,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkdzU2Q1d57jJ8X9llQbS47pBys4Bn6-VEYA&usqp=CAU'
    },
    {
      id: 4,
      name: 'Produtor 2',
      rating: 4.5,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkdzU2Q1d57jJ8X9llQbS47pBys4Bn6-VEYA&usqp=CAU'
    },
    {
      id: 5,
      name: 'Produtor 1',
      rating: 4.5,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkdzU2Q1d57jJ8X9llQbS47pBys4Bn6-VEYA&usqp=CAU'
    },
    {
      id: 6,
      name: 'Produtor 2',
      rating: 4.5,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkdzU2Q1d57jJ8X9llQbS47pBys4Bn6-VEYA&usqp=CAU'
    }
  ]

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({ latitude, longitude });
      },
      (error) => {
        console.error('Error getting location:', error);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  useFocusEffect(
    React.useCallback(() => {
      getCurrentLocation();
    }, [])
  );
  useFocusEffect(
    React.useCallback(() => {
      if (bottomSheetMapRef.current) {
        bottomSheetMapRef.current.expand();
      }
      return () => {
        if (bottomSheetMapRef.current) {
          bottomSheetMapRef.current.close();
        }
      };
    }, [])
  );

  return (
    <View style={MapStyle.mainContainer}>
      {currentLocation ? (
        <MapView
          provider={PROVIDER_GOOGLE}
          style={MapStyle.map}
          initialRegion={{
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{ latitude: currentLocation.latitude, longitude: currentLocation.longitude }}
            title="Você está aqui"
            description="Sua localização atual"
          >
            <UserLocationMarker/>
          </Marker>
        </MapView>
      ) : (
        <View>
          {/* You can render a loading indicator here */}
        </View>
      )}
      <BottomSheet
        ref={bottomSheetMapRef}
        index={1}
        snapPoints={[35, '40%']}
      >
        <SafeAreaView style={{ flex: 1}}>
          <ScrollView>
            {producersData.map((item) => (
              <View style={MapStyle.producerInfoContainer} key={item.id}>
                <ProducerInfo
                  name={item.name}
                  rating={item.rating}
                  image={item.image}
                  showDistance={true}
                />
              </View>
            ))}
          </ScrollView>
        </SafeAreaView>
      </BottomSheet>
    </View>
  );
};

export default Map;
