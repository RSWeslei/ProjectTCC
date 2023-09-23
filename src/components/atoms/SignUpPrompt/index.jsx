import {
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import style from "./style";

const SignUpPrompt = ({onPress = () => {}}) => {
  return (
    <View style={style.mainContainer}>
      <Text style={style.text}>{'Não possui uma conta?'}</Text>
      <TouchableOpacity
        onPress={onPress}
      >
        <Text
          style={style.signUpText}
        >{'Cadastra-se'}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SignUpPrompt;
