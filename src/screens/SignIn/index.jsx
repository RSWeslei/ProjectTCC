import React, { useState } from 'react'
import { View, Alert } from 'react-native'
import style from './style'
import InputField from '../../components/atoms/InputField'
import MainButton from '../../components/atoms/MainButton'
import SignUpPrompt from '../../components/atoms/SignUpPrompt'
import LogoSVG from '../../assets/images/main-logo.svg'
import { login } from '../../services/userService'

const SignIn = ({ navigation }) => {
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const togglePasswordVisibility = () => {
        setShowPassword(prevShowPassword => !prevShowPassword)
    }

    const handleSignIn = async () => {
        // navigation.navigate('Home') // Remove this line
        // return
        try {
            const response = await login(email, password)
            if (!response.success) {
                Alert.alert('Erro', response.message)
                return
            }
            if (response.success) {
                navigation.navigate('Home')
            }
        } catch (error) {
            Alert.alert('Erro', error.message || 'Erro ao realizar login')
        }
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
                />
            </View>
            <View style={style.loginContainer}>
                <SignUpPrompt onPress={() => navigation.push('SignUp')} />
                <MainButton text="Entrar" onPress={handleSignIn} />
            </View>
        </View>
    )
}

export default SignIn
