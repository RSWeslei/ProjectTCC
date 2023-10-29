import React, { useEffect, useState } from 'react';
import { Image, View } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapStyle from './style';
import colors from '../../utils/globalColors';
import Geolocation from 'react-native-geolocation-service';
import { useFocusEffect } from '@react-navigation/native';
import UserLocationMarker from "../../components/atoms/UserLocationMarker";

const Map = ({ navigation }) => {
  const [currentLocation, setCurrentLocation] = useState(null);

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
    </View>
  );
};

export default Map;
