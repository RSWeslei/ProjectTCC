import React, { useState, useEffect } from 'react';
import { View, Alert, Text } from 'react-native';
import style from './style';
import InputField from '../../components/atoms/InputField';
import MainButton from '../../components/atoms/MainButton';
import SignUpPrompt from '../../components/atoms/SignUpPrompt';
import LogoSVG from '../../assets/images/main-logo.svg';
import { login, validateToken } from '../../services/userService';

const SignIn = ({ navigation }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(true);

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const checkToken = async () => {
        try {
            const isValid = await validateToken();
            if (isValid) {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Home' }],
                });
            }
        } catch (error) {
            console.error('Erro ao validar o token:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        checkToken();
    }, []);

    const handleSignIn = async () => {
        try {
            const response = await login(email, password);
            if (!response.success) {
                Alert.alert('Erro', response.message);
                return;
            }
            navigation.reset({
                index: 0,
                routes: [{ name: 'Home' }],
            });
        } catch (error) {
            Alert.alert('Erro', error.message || 'Erro ao realizar login');
        }
    };

    if (loading) {
        return (
            <View style={style.mainContainer}>
                <LogoSVG />
                <Text>Verificando sessão...</Text>
            </View>
        );
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
                    onChangeText={setEmail}
                    autoComplete="email"
                    textContentType="emailAddress"
                    importantForAutofill="yes"
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
                    value={password}
                    onChangeText={setPassword}
                    autoComplete="password"
                    textContentType="password"
                    importantForAutofill="yes"
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
