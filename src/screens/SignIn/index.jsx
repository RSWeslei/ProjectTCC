import React, { useState } from 'react';
import { View, Text } from 'react-native';
import style from './style';
import InputField from '../../components/atoms/InputField';
import MainButton from '../../components/atoms/MainButton';
import SignUpPrompt from '../../components/atoms/SignUpPrompt';
import LogoSVG from '../../assets/images/main-logo.svg';

const SignIn = ({navigation}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSignIn = () => {
    console.log('Sign-in button pressed!');
    console.log(email)

    navigation.navigate('Home')
  }

  return (
    <View style={style.mainContainer}>
      <View style={style.logoContainer}>
        <LogoSVG />
      </View>
      <View style={style.inputContainer}>
        <InputField
          placeholder="Email"
          iconName={{
            first: 'envelope',
          }}
          value={email}
        />
        <InputField
          iconSize={20}
          placeholder="Senha"
          iconName={{
            first: 'lock',
            second: showPassword ? 'eye' : 'eye-slash',
          }}
          isPassword={!showPassword}
          secondIconClickAction={togglePasswordVisibility}
        />
      </View>
      <View style={style.loginContainer}>
        <SignUpPrompt onPress={() => navigation.push('SignUp')} />
        <MainButton text="Entrar" onPress={handleSignIn} />
      </View>
    </View>
  );
};

export default SignIn;
