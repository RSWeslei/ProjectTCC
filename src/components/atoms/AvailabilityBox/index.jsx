import React from "react";
import { Text, View } from "react-native";
import style from "./style";
import colors from "../../../utils/globalColors";

const AvailabilityBox = ({ isAvailable }) => {
  const boxColor = isAvailable ? colors.primary : colors.error;
  const text = isAvailable ? "Disponível" : "Indisponível";

  return (
    <View style={[style.container, { backgroundColor: boxColor }]}>
      <Text style={style.text}>{text}</Text>
    </View>
  );
};

export default AvailabilityBox;
