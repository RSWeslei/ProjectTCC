import {
  StyleSheet,
  Text, TouchableOpacity,
  View,
  SafeAreaView, ScrollView,
} from "react-native";
import React, { useState } from 'react';
import InputField from "../../components/atoms/InputField";
import MainButton from "../../components/atoms/MainButton";
import style from "./style";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={style.mainContainer}>
          <InputField
            placeholder='Email'
            iconName={{
              first: 'envelope',
            }}
          />
          <InputField
            iconSize={20}
            placeholder='Senha'
            iconName={{
              first: 'lock',
              second: showPassword ? 'eye' : 'eye-slash',
            }}
            isPassword={!showPassword}
            secondIconClickAction={togglePasswordVisibility}
          />
        </View>
        <MainButton text="Entrar" />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  fastSignInContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  box: {
    width: 120,
    height: 120,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButton: {
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 24,
  },
});

export default SignIn;
