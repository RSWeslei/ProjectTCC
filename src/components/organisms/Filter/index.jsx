import React, { useState } from "react";
import { View, Text } from "react-native";
import {Slider} from '@miblanchard/react-native-slider';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import style from "./style";

const Filter = () => {
  const [priceRange, setPriceRange] = useState([0, 1000]); // Initial price range

  const handlePriceChange = (values) => {
    setPriceRange(values);
  };

  return (
    <View style={style.mainContainer}>
      <Text style={style.title}>Filtros</Text>
      <View style={style.priceContainer}>
        <Text style={style.priceText}>Preço</Text>
        <Text>R$ {priceRange[0]} - R${priceRange[1]}</Text>
      </View>
      <MultiSlider
        style={style.slider}
        values={[0, 1000]}
        min={0}
        max={1000}
        step={1}
        sliderLength={350}
        onValuesChange={handlePriceChange}
      >

      </MultiSlider>
    </View>
  );
};

export default Filter;
