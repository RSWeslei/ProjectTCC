import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, View, Text, TouchableOpacity } from 'react-native';
import ItemCard from '../../components/molecules/ItemCard';
import { fetchProduct } from '../../services/productService';
import Loading from '../../components/atoms/Loading';
import styles from './style';
import ProducerInfo from '../../components/atoms/ProducerInfo'
import {useFocusEffect} from '@react-navigation/native'

const Home = ({ navigation, route, searchQuery }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    let producerId = route?.params?.producerId;

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
        producerId = null;
        loadProducts().then(r => {});
    };

    useEffect(() => {
        loadProducts().then(r => {});
    }, [producerId]);

    useFocusEffect(
        React.useCallback(() => {
            if (!producerId){
                clearFilter();
                loadProducts().then(r => {});
            }
        }, [])
    );

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
                <View style={styles.filterContainer}>
                    <TouchableOpacity onPress={clearFilter} style={styles.clearFilterButton}>
                        <Text style={styles.clearFilterText}>Limpar Filtro</Text>
                    </TouchableOpacity>
                    <ProducerInfo
                        image={products[0]?.producer.imagePath}
                        name={products[0]?.producer.user.name}
                    />
                </View>
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
