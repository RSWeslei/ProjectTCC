import React, {useEffect, useState} from 'react';
import {View, Text, BackHandler} from 'react-native';
import style from './style';
import LogoSVG from '../../assets/images/main-logo.svg';
import ItemCard from "../../components/molecules/ItemCard";

const Home = ({navigation}) => {
  return (
    <View style={style.mainContainer}>
      <View style={style.itemContainer}>
        <ItemCard/>
        <ItemCard/>
        <ItemCard/>
        <ItemCard/>
        <ItemCard/>
      </View>
    </View>
  );
};

export default Home;
