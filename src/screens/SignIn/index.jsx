import {
  StyleSheet,
  Text, TouchableOpacity,
  KeyboardAvoidingView,
  View,
  SafeAreaView, ScrollView,
} from "react-native";
import style from "./style";

import React, { useState } from 'react';
import InputField from "../../components/atoms/InputField";
import MainButton from "../../components/atoms/MainButton";
import SignUpPrompt from "../../components/atoms/SignUpPrompt";
import LogoSVG from '../../assets/images/main-logo.svg';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <View style={style.mainContainer}>
      <View style={style.logoContainer}>
        <LogoSVG />
      </View>
      <View style={style.inputContainer}>
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
      <View style={style.loginContainer}>
        <SignUpPrompt />
        <MainButton text="Entrar" />
      </View>
    </View>

    // <View style={{flex: 1, backgroundColor: 'red'}}>
    //   <View style={{backgroundColor: 'blue', width: '100%', height: 50}}/>
    //   <View style={{flex: 1, backgroundColor: 'grey'}}/>
    //   <View style={{backgroundColor: 'green', width: '100%', height: 50}}/>
    // </View>


  )
}

export default SignIn;
