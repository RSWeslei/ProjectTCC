import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import style from "./style";
import { loadImage } from '../../../services/fetchService';
import { useNavigation } from '@react-navigation/native';

const ProducerInfo = ({ image, name, showDistance = false, distance, showProductsIcon = false, producerId }) => {
    const navigation = useNavigation();

    const handleProductsPress = () => {
        navigation.navigate('Início', {
            screen: 'Início',
            params: { producerId },
        });
    };

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
            {showProductsIcon && (
                <TouchableOpacity onPress={handleProductsPress} style={style.productsIconContainer}>
                    <Icon
                        name="shopping-bag"
                        style={style.productsIcon}
                    />
                </TouchableOpacity>
            )}
        </View>
    );
};

export default ProducerInfo;
