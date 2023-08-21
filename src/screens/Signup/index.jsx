
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import style from './style';
import InputField from '../../components/atoms/InputField';
import MainButton from '../../components/atoms/MainButton';
import SignUpPrompt from '../../components/atoms/SignUpPrompt';
import LogoSVG from '../../assets/images/main-logo.svg';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showSecondPassword, setShowSecondPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isValidSecondPassword, setIsValidSecondPassword] = useState(true);
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  }

  const toggleSecondPasswordVisibility = () => {
    setShowSecondPassword((prevShowSecondPassword) => !prevShowSecondPassword);
  }

  const validateEmail = (inputEmail) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    if (inputEmail == '') {
      setIsValidEmail(true);
    } else {
      setIsValidEmail(emailRegex.test(inputEmail));
    }
    setEmail(inputEmail);
  };

  const validatePassword = (inputPassword) => {
    if (inputPassword == '') {
      setIsValidPassword(true);
    } else {
      setIsValidPassword(inputPassword.length >= 8);
    }
  }

  const validateSecondPassword = (inputSecondPassword) => {
    setIsValidSecondPassword(inputSecondPassword == password);
  }

  return (
    <View style={style.mainContainer}>
      <View style={style.logoContainer}>
        <LogoSVG />
      </View>
      <View style={style.inputContainer}>
        <InputField
          placeholder="Nome"
          iconName={{
            first: 'user-circle',
          }}
        />
        <InputField
          placeholder="Email"
          iconName={{
            first: 'envelope',
          }}
          value={email}
          onChangeText={validateEmail}
          isValid={isValidEmail}
          invalidText="Email inválido"
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
          onChangeText={validatePassword}
          isValid={isValidPassword}
          invalidText={'Senha deve ter pelo menos 8 caracteres'}
          value={password}
        />
        <InputField
          iconSize={20}
          placeholder="Repetir Senha"
          iconName={{
            first: 'lock',
            second: showSecondPassword ? 'eye' : 'eye-slash',
          }}
          isPassword={!showSecondPassword}
          secondIconClickAction={toggleSecondPasswordVisibility}
          onChangeText={validateSecondPassword}
          isValid={isValidSecondPassword}
          invalidText={'Senhas não conferem'}
        />
      </View>
      <View style={style.loginContainer}>
        <MainButton text="Cadastrar" />
      </View>
    </View>
  );
};

export default SignUp;
