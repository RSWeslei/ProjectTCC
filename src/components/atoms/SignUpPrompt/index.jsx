import {
  Text,
  View,
} from "react-native";
import style from "./style";

const SignUpPrompt = () => {
  return (
    <View style={style.mainContainer}>
      <Text style={style.text}>{'Não possui uma conta?'}</Text>
      <Text
        style={[style.signUpText, style.text]}
        onPress={() => console.log('Cadastra-se')}
      >{'Cadastra-se'}</Text>
    </View>
  )
}

export default SignUpPrompt;
