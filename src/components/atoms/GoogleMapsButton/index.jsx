import React from 'react';
import { Text, TouchableOpacity, Linking } from 'react-native';
import style from './style';

const GoogleMapsButton = ({ coordinates }) => {
  const openGoogleMaps = () => {
    const { latitude, longitude } = coordinates;
    const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    Linking.openURL(url);
  };

  return (
    <TouchableOpacity style={style.button} onPress={openGoogleMaps}>
      <Text style={style.buttonText}>Abrir no Google Maps</Text>
    </TouchableOpacity>
  );
};

export default GoogleMapsButton;
