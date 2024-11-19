import React, { useState } from 'react';
import { View, Text, Alert, TouchableOpacity } from 'react-native';
import style from './style';
import InputField from '../../components/atoms/InputField';
import MainButton from '../../components/atoms/MainButton';
import { createProducerAccount } from '../../services/producerService';
import Icon from 'react-native-vector-icons/FontAwesome';

const CreateProducerAccount = ({ navigation }) => {
  const [cpf, setCpf] = useState('');
  const [imagePath, setImagePath] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [complement, setComplement] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postalCode, setPostalCode] = useState('');

  const handleCreateAccount = async () => {
    if (!cpf || !street || !number || !city || !state || !postalCode) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios');
      return;
    }

    try {
      const data = {
        cpf,
        imagePath,
        address: {
          street,
          number,
          complement,
          city,
          state,
          postalCode,
        },
      };

      const response = await createProducerAccount(data);

      if (!response.success) {
        Alert.alert('Erro', response.message);
        return;
      }

      Alert.alert('Sucesso', 'Conta de produtor criada com sucesso!');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro ao criar a conta de produtor. Tente novamente.');
    }
  };

  const handleGetLocation = () => {
    Alert.alert('Ação', 'Função para obter coordenadas');
  };

  return (
      <View style={style.mainContainer}>
        <Text style={style.headerText}>Com esta conta, você poderá adicionar produtos ao aplicativo.</Text>
        <View style={style.inputContainer}>
          <InputField
              placeholder="CPF"
              iconName={{ first: 'id-card' }}
              value={cpf}
              onChangeText={(text) => setCpf(text)}
              style={style.inputField}
          />
          <InputField
              placeholder="Endereço"
              iconName={{ first: 'map-marker' }}
              value={street}
              onChangeText={(text) => setStreet(text)}
              style={style.inputField}
          />
          <InputField
              placeholder="Número"
              iconName={{ first: 'home' }}
              value={number}
              onChangeText={(text) => setNumber(text)}
              style={style.inputField}
          />
          <InputField
              placeholder="Complemento"
              iconName={{ first: 'building' }}
              value={complement}
              onChangeText={(text) => setComplement(text)}
              style={style.inputField}
          />
          <InputField
              placeholder="Cidade"
              iconName={{ first: 'map-pin' }}

              value={city}
              onChangeText={(text) => setCity(text)}
              style={style.inputField}
          />
          <InputField
              placeholder="Estado"
              iconName={{ first: 'map' }}
              value={state}
              onChangeText={(text) => setState(text)}
              style={style.inputField}
          />
          <InputField
              placeholder="CEP"
              iconName={{ first: 'envelope' }}
              value={postalCode}
              onChangeText={(text) => setPostalCode(text)}
              style={style.inputField}
          />
          <TouchableOpacity onPress={handleGetLocation} style={style.getLocationButton}>
            <View style={style.locationContainer}>
              <Icon name="map-marker" size={20} color="#000" />
              <Text style={style.getLocationText}>Incluir localização pelo Google Maps</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={style.loginContainer}>
          <MainButton text="Criar Conta de Produtor" onPress={handleCreateAccount} />
        </View>
      </View>
  );
};

export default CreateProducerAccount;