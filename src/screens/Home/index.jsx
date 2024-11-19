import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import ItemCard from '../../components/molecules/ItemCard';
import { fetchProduct } from '../../services/productService';
import Loading from '../../components/atoms/Loading';
import styles from './style';

const Home = ({ navigation, route, searchQuery }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Pega o producerId dos parâmetros da rota
  const producerId = route?.params?.producerId;

  useEffect(() => {
    // Carregar produtos na montagem do componente
    const loadProducts = async () => {
      setLoading(true);
      try {
        const data = await fetchProduct();
        setProducts(data.data);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  // Aplicar filtragem após receber os produtos e o producerId
  const filteredProducts = products.filter((item) => {
    // Filtrar por producerId, se for fornecido
    const matchesProducer = producerId ? item.producer.id === producerId : true;
    // Filtrar por query de busca, se houver
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
