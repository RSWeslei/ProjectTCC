import React from 'react';
import { View, Image } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import style from './style';
import {loadImage} from '../../../services/fetchService'

const ProducerLocationMarker = ({ imageUrl }) => {
    return (
        <View style={style.markerContainer}>
            <View style={style.iconContainer}>
                <Svg xmlns="http://www.w3.org/2000/svg" width="45" height="50" viewBox="0 0 50 50">
                    <Path d="M25 0C15.6 0 9 6.6 9 16c0 10 16 26 16 26s16-16 16-26c0-9.4-6.6-16-16-16zm0 22c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" fill="#41d12e"/>
                </Svg>
                <Image
                    source={{ uri: loadImage(imageUrl) }}
                    style={style.producerImage}
                />
            </View>
        </View>
    );
};

export default ProducerLocationMarker;