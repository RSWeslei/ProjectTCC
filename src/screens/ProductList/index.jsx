import React, {useState, useEffect, useCallback} from 'react'
import { View, Text, FlatList, TouchableOpacity, Alert } from "react-native";
import styles from "./style";
import { fetchUserProduct, deleteProduct } from "../../services/productService";
import {useFocusEffect} from '@react-navigation/native'

const ProductList = ({ navigation }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadProducts = async () => {
        try {
            setLoading(true);
            const response = await fetchUserProduct();
            setProducts(response.data);
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteProduct = async (productId) => {
        try {
            await deleteProduct(productId);
            Alert.alert("Sucesso", "Produto deletado!");
            await loadProducts();
        } catch (error) {
            Alert.alert("Erro", "Não foi possível deletar o produto.");
        }
    };

    const handleEditProduct = (product) => {
        navigation.navigate("ProductForm", { editingProduct: product });
    };

    useEffect(() => {
        loadProducts().then(r => {});
    }, []);

    useFocusEffect(
        useCallback(() => {
            loadProducts().then(r => {});
        }, [])
    );

    if (loading) {
        return (
            <View style={styles.mainContainer}>
                <Text>Carregando produtos...</Text>
            </View>
        );
    }

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.header}>Lista de Produtos</Text>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.productItem}>
                        <Text style={styles.productName}>{item.name}</Text>
                        <View style={styles.actionButtons}>
                            <TouchableOpacity onPress={() => handleEditProduct(item)}>
                                <Text style={styles.editButton}>Editar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleDeleteProduct(item.id)}>
                                <Text style={styles.deleteButton}>Deletar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
        </View>
    );
};

export default ProductList;
