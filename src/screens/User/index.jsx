import {
  BackHandler,
  Text,
  View,
} from "react-native";
import colors from "../../utils/globalColors";
import styles from "./style";
import UserConfigCard from "../../components/atoms/UserConfigCard";
import UserImage from "../../components/atoms/UserImage";

const User = ({ navigation }) => {
  const isProducer = true;
  return (
    <View style={styles.mainContainer}>
      <UserImage/>
      <View style={styles.cardsContainer}>
        {isProducer ? <UserConfigCard data={{ title: "Conta de produtor", subtitle: "Acesse seus dados de produtor" }} /> : null}
        {isProducer ? null : <UserConfigCard data={{ title: "Criar conta de produtor", subtitle: "Crie uma conta de produtor" }} />}
        <UserConfigCard data={{title: "Meus dados", subtitle: "Acesse seus dados"}} />
        <UserConfigCard
            data={{title: "Sair",
            subtitle: "Saia do aplicativo"}}
            onPress={() => BackHandler.exitApp()}
        />
      </View>
    </View>
  );
}

export default User;
