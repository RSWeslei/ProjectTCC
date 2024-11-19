import React, { useEffect, useState } from "react";
import { BackHandler, Text, View } from "react-native";
import styles from "./style";
import UserConfigCard from "../../components/atoms/UserConfigCard";
import UserImage from "../../components/atoms/UserImage";
import { fetchUser } from "../../services/userService";

const User = ({ navigation }) => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    const loadUserData = async () => {
        try {
            const response = await fetchUser();
            setUserData(response.data);
        }
        finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadUserData().then(r => {});
    }, []);

    if (loading) {
        return <Text>Carregando...</Text>;
    }

    return (
        <View style={styles.mainContainer}>
            <UserImage data={userData} />
            <View style={styles.cardsContainer}>
                {userData?.user.isProducer ? (
                    <UserConfigCard
                        data={{
                            title: "Conta de produtor",
                            subtitle: "Acesse seus dados de produtor",
                        }}
                    />
                ) : (
                    <UserConfigCard
                        data={{
                            title: "Criar conta de produtor",
                            subtitle: "Crie uma conta de produtor",
                        }}
                        onPress={() => navigation.navigate('CreateProducerAccount')}
                    />

                )}
                <UserConfigCard data={{ title: "Meus dados", subtitle: "Acesse seus dados" }} />
                <UserConfigCard
                    data={{
                        title: "Sair",
                        subtitle: "Saia do aplicativo",
                    }}
                    onPress={() => BackHandler.exitApp()}
                />
            </View>
        </View>
    );
};

export default User;
