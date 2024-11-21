import React, { useState } from 'react';
import {View, Text, Alert} from 'react-native'
import style from './style';
import InputField from '../../components/atoms/InputField';
import MainButton from '../../components/atoms/MainButton';
import LogoSVG from '../../assets/images/main-logo.svg';
import {signUp} from '../../services/userService';

const SignUp = ({navigation}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showSecondPassword, setShowSecondPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isValidSecondPassword, setIsValidSecondPassword] = useState(true);
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  }

  const toggleSecondPasswordVisibility = () => {
    setShowSecondPassword((prevShowSecondPassword) => !prevShowSecondPassword);
  }

  const validateEmail = (inputEmail) => {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    setIsValidEmail(inputEmail === '' || emailRegex.test(inputEmail));
    setEmail(inputEmail);
  };

  const validatePassword = (inputPassword) => {
    setIsValidPassword(inputPassword === '' || inputPassword.length >= 8);
    setPassword(inputPassword);
  }

  const validateRepeatPassword = (inputRepeatPassword) => {
    setIsValidSecondPassword(inputRepeatPassword === password);
    setRepeatPassword(inputRepeatPassword);
  }

  const [name, setName] = useState('');

    const handleSignUp = async () => {
        if (name === '' || email === '' || password === '' || repeatPassword === '') {
            Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios.')
            return
        }

        if (!isValidEmail) {
            Alert.alert('Erro', 'Por favor, insira um e-mail válido.')
            return
        }

        if (!isValidPassword) {
            Alert.alert('Erro', 'A senha deve ter pelo menos 8 caracteres.')
            return
        }

        if (!isValidSecondPassword) {
            Alert.alert('Erro', 'As senhas não conferem. Verifique e tente novamente.')
            return
        }

        try {
            const data = { name, email, password }
            console.log('Dados do usuário:', data)

            const response = await signUp(data)
            console.log('Usuário cadastrado com sucesso:', response)

            if (!response.success) {
                Alert.alert('Erro', response.message)
                return
            }

            Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!')

            navigation.replace('SignIn')
        } catch (error) {
            Alert.alert('Erro', 'Ocorreu um erro ao cadastrar. Tente novamente.')
        }
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
            value={name}
            onChangeText={(text) => setName(text)}
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
            onChangeText={validateRepeatPassword}
            isValid={isValidSecondPassword}
            invalidText={'Senhas não conferem'}
            value={repeatPassword}
        />
      </View>
      <View style={style.loginContainer}>
        <MainButton text="Cadastrar" onPress={handleSignUp} />
      </View>
    </View>
  );
};

export default SignUp;
