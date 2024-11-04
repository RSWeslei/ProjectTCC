import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import ItemCard from '../../components/molecules/ItemCard';
import { fetchProduct } from '../../services/productService';
import Loading from '../../components/atoms/Loading';
import styles from './style';

const Home = ({ navigation, searchQuery }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProduct();
        setProducts(data.data);
      } finally {
        setLoading(false);
      }
    };

    loadProducts().then(r => {});
  }, []);

  if (loading) {
    return <Loading />;
  }

  const filteredProducts = products.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
      <View style={styles.mainContainer}>
        <FlatList
            data={filteredProducts}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
                <ItemCard item={item} navigation={navigation} />
            )}
        />
      </View>
  );
};

export default Home;
