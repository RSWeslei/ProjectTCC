import React from "react";
import { View } from "react-native";
import styles from "./style";
import UserConfigCard from "../../components/atoms/UserConfigCard";

const ProductCRUD = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.cardsContainer}>
                <UserConfigCard
                    data={{
                        title: "Cadastrar Produto",
                        subtitle: "Adicione novos produtos ao sistema",
                    }}
                    onPress={() =>
                        navigation.navigate("ProductForm", {
                            onSuccess: () => {
                                console.log("Produto criado ou atualizado com sucesso!");
                            },
                        })
                    }
                />

                <UserConfigCard
                    data={{
                        title: "Ver Produtos",
                        subtitle: "Gerencie os produtos cadastrados",
                    }}
                    onPress={() => navigation.navigate("ProductList")}
                />
                <UserConfigCard
                    data={{
                        title: "Voltar",
                        subtitle: "Retorne ao menu principal",
                    }}
                    onPress={() => navigation.goBack()}
                />
            </View>
        </View>
    );
};

export default ProductCRUD;
