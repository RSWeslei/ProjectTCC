import React, {useCallback, useEffect, useState} from 'react'
import { FlatList, View } from 'react-native';
import ItemCard from '../../components/molecules/ItemCard';
import { fetchProduct } from '../../services/productService';
import Loading from '../../components/atoms/Loading';
import styles from './style';
import {useFocusEffect} from '@react-navigation/native'

const Home = ({ navigation, route, searchQuery }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const producerId = route?.params?.producerId;

  const loadProducts = async () => {
    setLoading(true);
    try {
      const data = await fetchProduct();
      setProducts(data.data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts().then();
  }, []);

  useFocusEffect(
      useCallback(() => {
        loadProducts().then();
      }, [])
  );

  const filteredProducts = products.filter((item) => {
    const matchesProducer = producerId ? item.producer.id === producerId : true;
    const matchesSearchQuery = searchQuery ? item.name.toLowerCase().includes(searchQuery.toLowerCase()) : true;
    return matchesProducer && matchesSearchQuery;
  });

  if (loading) {
    return <Loading />;
  }

  return (
      <View style={styles.mainContainer}>
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
