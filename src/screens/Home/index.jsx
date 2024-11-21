import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, View, Text, TouchableOpacity } from 'react-native';
import ItemCard from '../../components/molecules/ItemCard';
import { fetchProduct } from '../../services/productService';
import Loading from '../../components/atoms/Loading';
import styles from './style';

const Home = ({ navigation, route, searchQuery }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const producerId = route?.params?.producerId;

    const loadProducts = async () => {
        setLoading(true);
        try {
            const data = await fetchProduct();
            if (producerId) {
                const filtered = data.data.filter((item) => item.producer.id === producerId);
                setProducts(filtered);
            } else {
                setProducts(data.data);
            }
        } catch (error) {
            console.error("Erro ao carregar produtos:", error);
        } finally {
            setLoading(false);
        }
    };

    const clearFilter = () => {
        navigation.setParams({ producerId: null });
        loadProducts();
    };

    useEffect(() => {
        loadProducts();
    }, [producerId]);

    const filteredProducts = products.filter((item) => {
        const matchesSearchQuery = searchQuery
            ? item.name.toLowerCase().includes(searchQuery.toLowerCase())
            : true;
        return matchesSearchQuery;
    });

    if (loading) {
        return <Loading />;
    }

    return (
        <View style={styles.mainContainer}>
            {producerId && (
                <TouchableOpacity onPress={clearFilter} style={styles.clearFilterButton}>
                    <Text style={styles.clearFilterText}>Limpar Filtro</Text>
                </TouchableOpacity>
            )}
            <FlatList
                data={filteredProducts}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <ItemCard item={item} navigation={navigation} />
                )}
            />
        </View>
    );
};

export default Home;
