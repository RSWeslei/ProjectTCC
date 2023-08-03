import {
  TextInput,
  View,
} from 'react-native';
import InputFieldStyle from "./style";
import Icon from 'react-native-vector-icons/FontAwesome'
const InputField = ({placeholder='Default', iconName= {first: 'circle'}, isPassword, secondIconClickAction = () => {}}) => {
  return (
    <View style={InputFieldStyle.mainContainer}>
      <Icon
        style={InputFieldStyle.icon}
        name={iconName.first} size={15}
      />
      <TextInput
        placeholder={placeholder}
        style={InputFieldStyle.textInput}
        secureTextEntry={isPassword}
      />
      { iconName.second && <Icon
        style={InputFieldStyle.secondIcon}
        name={iconName.second} size={15}
        onPress={secondIconClickAction}
      /> }
    </View>
  )
}

export default InputField;
