import React, { useCallback, useEffect, useState } from "react";
import { BackHandler, Text, View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import styles from "./style";
import UserConfigCard from "../../components/atoms/UserConfigCard";
import UserImage from "../../components/atoms/UserImage";
import {fetchUser, logout} from '../../services/userService'

const User = ({ navigation }) => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    const loadUserData = async () => {
        try {
            setLoading(true);
            const response = await fetchUser();
            setUserData(response.data);
        } finally {
            setLoading(false);
        }
    }

    const exitApp = () => {
        logout().then(r => {});
        navigation.reset({
            index: 0,
            routes: [{ name: 'SignIn' }],
        });
    }

    useEffect(() => {
        loadUserData().then()
    }, []);

    useFocusEffect(
        useCallback(() => {
            loadUserData().then();
        }, [])
    );

    if (loading) {
        return (
            <View style={styles.mainContainer}>
                <Text>Carregando...</Text>
            </View>
        );
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
                        onPress={() => navigation.navigate("ProductCRUD")}
                    />

                ) : (
                    <UserConfigCard
                        data={{
                            title: "Criar conta de produtor",
                            subtitle: "Crie uma conta de produtor",
                        }}
                        onPress={() => navigation.navigate("CreateProducerAccount")}
                    />
                )}
                <UserConfigCard data={{ title: "Meus dados", subtitle: "Acesse seus dados" }} />
                <UserConfigCard
                    data={{
                        title: "Sair",
                        subtitle: "Saia do aplicativo",
                    }}
                    onPress={() => exitApp()}
                />
            </View>
        </View>
    );
};

export default User;
