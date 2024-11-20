import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./style";
import {loadImage} from '../../../services/fetchService'

const UserImage = (data) => {
    data = data.data;
    const isProducer = data.user.isProducer;

    return (
        <View style={styles.mainContainer}>
            <Image
                source={
                    isProducer && data.producer?.imagePath
                        ? { uri: loadImage(data.producer.imagePath) }
                        : require('../../../assets/images/userDefault.jpg')
                }
                style={styles.image}
            />
            <Text style={styles.usernameText}>{data.user.name}</Text>
            <Text style={styles.subtitleText}>
                {isProducer ? 'Produtor' : 'Consumidor'}
            </Text>
        </View>
    );
};

export default UserImage;
