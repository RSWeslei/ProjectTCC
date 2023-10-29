import React, { useState, useRef, useEffect } from "react";
import { View, Text, ScrollView, Dimensions } from "react-native";
import style from "./style";
import SvgImage1 from "../../assets/images/welcomePage/Foto_01.svg";
import SvgImage2 from "../../assets/images/welcomePage/Foto_02.svg";
import SvgImage3 from "../../assets/images/welcomePage/Foto_03.svg";
import MainButton from "../../components/atoms/MainButton";
import AsyncStorage from '@react-native-async-storage/async-storage';

const imagesData = [
  {
    image: <SvgImage1 style={style.image} />,
    title: "Compre direto dos produtores rurais",
    subtitle: "Produtos frescos e de qualidade ao seu alcance",
  },
  {
    image: <SvgImage2 style={style.image} />,
    title: "Apoie a agricultura familiar",
    subtitle: "Compre diretamente dos produtores rurais e ajude a fortalecer a agricultura familiar",
  },
  {
    image: <SvgImage3 style={style.image} />,
    title: "Descubra a diversidade de sabores da sua região",
    subtitle: "Uma grande variedade de produtos frescos e saborosos está esperando por você",
  },
];

const Welcome = ({ navigation }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const scrollViewRef = useRef();
  const [showWelcomeScreen, setShowWelcomeScreen] = useState(true);

  const checkWelcomeScreen = async () => {
    try {
      const hasShownWelcomeScreen = await AsyncStorage.getItem('hasSeenWelcomeScreen');
      if (hasShownWelcomeScreen !== null) {
        setShowWelcomeScreen(false);
      }
    } catch (error) {
      console.error('Error checking Welcome Screen:', error);
    }
  };

  useEffect(() => {
    checkWelcomeScreen().then(r => {});
  }, []);

  const handlePageChange = (page) => {
    scrollViewRef.current.scrollTo({ x: page * screenWidth, animated: true });
    setCurrentPage(page);
  };

  const handleNext = () => {
    if (currentPage < imagesData.length - 1) {
      handlePageChange(currentPage + 1);
    } else {
      navigation.navigate("SignIn");
      AsyncStorage.setItem('hasSeenWelcomeScreen', 'true').then(r => {});
    }
  };

  const screenWidth = Dimensions.get("window").width;

  return (
    <View style={style.mainContainer}>
      <ScrollView
        style={style.scrollView}
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        contentContainerStyle={{ height: 400 }}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(event) => {
          const page = Math.floor(event.nativeEvent.contentOffset.x / screenWidth);
          setCurrentPage(page);
        }}
      >
        {imagesData.map((data, index) => (
          <View key={index} style={style.imageContainer}>
            {data.image}
          </View>
        ))}
      </ScrollView>
      <View style={style.infoContainer}>
          <View style={style.paginationContainer}>
            {imagesData.map((_, index) => (
              <View
                key={index}
                style={[
                  style.paginationDot,
                  currentPage === index && style.activeDot,
                ]}
              />
            ))}
          </View>
          <Text style={style.title}>{imagesData[currentPage].title}</Text>
          <Text style={style.subtitle}>{imagesData[currentPage].subtitle}</Text>
          <View style={style.buttonContainer}>
            <MainButton
              text={currentPage < imagesData.length - 1 ? "Próximo" : "Continuar"}
              onPress={handleNext}
            />
          </View>
        </View>
    </View>
  );
};

export default Welcome;
