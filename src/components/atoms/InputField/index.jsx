import {
  TextInput,
  View,
  Text
} from 'react-native';
import InputFieldStyle from "./style";
import Icon from 'react-native-vector-icons/FontAwesome'
import style from "../../../screens/Signup/style";
  const InputField = ({
       iconSize= 15,
       placeholder='Default',
       iconName= {first: 'circle'},
       isPassword,
       secondIconClickAction = () => {},
       onChangeText = () => {},
       isValid = true,
       invalidText = '',
       value = '',
    }) => {

  const textInputStyle = [
    InputFieldStyle.mainContainer,
    !isValid && style.invalidField,
  ];

  return (
    <View>
      <View style={textInputStyle}>
        <Icon
          style={InputFieldStyle.icon}
          name={iconName.first} size={iconSize}
        />
        <TextInput
          placeholder={placeholder}
          style={InputFieldStyle.textInput}
          secureTextEntry={isPassword}
          onChangeText={onChangeText}
          value={value}
        />
        { iconName.second && <Icon
          style={InputFieldStyle.secondIcon}
          name={iconName.second} size={iconSize}
          onPress={secondIconClickAction}
        /> }
      </View>
      { !isValid &&
        <View>
          <Text style={style.invalidText}>{invalidText}</Text>
        </View>
      }
    </View>

  )
}

export default InputField;
