import React, {useEffect, useState} from 'react';
import {View, Text, BackHandler} from 'react-native';
import style from './style';
import LogoSVG from '../../assets/images/main-logo.svg';
import ItemCard from "../../components/molecules/ItemCard";
import Filter from "../../components/organisms/Filter";

const Home = ({navigation}) => {
  const [items, setItems] = useState([
    {
      name: "Tomate Ameixa",
      price: 12.99,
      measure: "/kg",
      image: require("../../assets/images/1325915.png"),
      producer: {
        name: "Produtor 1",
        rating: 4.1,
        image: require("../../assets/images/1325915.png")
      },
      description: "Tomate Ameixa é um tomate muito bom"
    },
    {
      name: "Cebola Roxa",
      price: 4.99,
      measure: "/kg",
      image: require("../../assets/images/1325915.png"),
      producer: {
        name: "Produtor 2",
        rating: 4.3,
        image: require("../../assets/images/1325915.png")
      },
      description: "Cebola Roxa é uma cebola muito boa"
    },
    {
      name: "Alface",
      price: 2.99,
      measure: "/kg",
      image: require("../../assets/images/1325915.png"),
      producer: {
        name: "Produtor 3",
        rating: 4.5,
        image: require("../../assets/images/1325915.png")
      },
      description: "Alface é uma alface muito boa"
    },
    {
      name: "Cenoura",
      price: 1.99,
      measure: "/kg",
      image: require("../../assets/images/1325915.png"),
      producer: {
        name: "Produtor 4",
        rating: 4.7,
        image: require("../../assets/images/1325915.png")
      },
      description: "Cenoura é uma cenoura muito boa"
    },
    ]
  );

  return (
    <View style={style.mainContainer}>
      <View style={style.itemContainer}>
        {items.map((item, index) => (
          <ItemCard
            key={index}
            item={item}
            navigation={navigation}
          />
        ))}
      </View>
    </View>
  );
};

export default Home;
