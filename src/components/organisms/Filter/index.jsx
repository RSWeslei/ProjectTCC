import React, { useState } from "react";
import { View, Text, Switch, TouchableOpacity } from "react-native";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import style from "./style";
import colors from "../../../utils/globalColors";
import MainButton from "../../atoms/MainButton";

const Filter = () => {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [distance, setDistance] = useState(10);
  const [hasPesticides, setHasPesticides] = useState(false);

  const handlePriceChange = (values) => {
    setPriceRange(values);
  };

  const handleDistanceChange = (value) => {
    setDistance(value);
  };

  const togglePesticides = () => {
    setHasPesticides((prevValue) => !prevValue);
  };

  const clearFilters = () => {
    setPriceRange([0, 1000]);
    setDistance(10);
    setHasPesticides(false);
  };

  const applyFilters = () => {
    // Implementar a lógica para aplicar os filtros aqui
  };

  return (
    <View style={style.mainContainer}>
      <Text style={style.title}>Filtros</Text>
      <View style={style.priceContainer}>
        <Text style={style.priceText}>Preço</Text>
        <Text>
          R$ {priceRange[0]} - R$ {priceRange[1]}
        </Text>
      </View>
      <View style={style.sliderContainer}>
        <MultiSlider
          values={priceRange}
          min={0}
          max={1000}
          step={1}
          sliderLength={320}
          onValuesChange={handlePriceChange}
          selectedStyle={{ backgroundColor: colors.primary }}
          unselectedStyle={{ backgroundColor: colors.secondaryGrey }}
        />
      </View>
      <View style={style.distanceContainer}>
        <Text style={style.distanceText}>Distância (km)</Text>
        <Text>{distance} km</Text>
      </View>
      <View style={style.sliderContainer}>
        <MultiSlider
          values={[distance]}
          min={0}
          max={50}
          step={1}
          sliderLength={320}
          onValuesChange={(values) => handleDistanceChange(values[0])}
          selectedStyle={{ backgroundColor: colors.primary }}
          unselectedStyle={{ backgroundColor: colors.secondaryGrey }}
          touchDimensions={{
            height: 100,
            width: 100,
            slipDisplacement: 100,
          }}
        />
      </View>
      <View style={style.pesticidesContainer}>
        <Text style={style.pesticidesText}>Possui Agrotóxicos</Text>
        <View style={style.checkboxContainer}>
          <Text>Não</Text>
          <Switch
            value={hasPesticides}
            onValueChange={togglePesticides}
            thumbColor={hasPesticides ? colors.primary : colors.secondaryGrey}
          />
          <Text>Sim</Text>
        </View>
      </View>
      <TouchableOpacity style={style.clearButton} onPress={clearFilters}>
        <Text style={style.clearButtonText}>Limpar Filtros</Text>
      </TouchableOpacity>
      <View style={style.applyButtonContainer}>
        <MainButton text="Aplicar" onPress={applyFilters} />
      </View>
    </View>
  );
};

export default Filter;
