import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// Dummy data for products
const dummyProducts = [
  { id: 1, name: 'Chitato', price: 10, image: require('../assets/product1.jpg') },
  { id: 2, name: 'Pop Pop', price: 20, image: require('../assets/product2.jpg') },
  { id: 3, name: 'Kacang Kulit', price: 30, image: require('../assets/product3.jpg') },
  // Add more dummy products as needed
];

const ProductItem = ({ item, onPress }) => (
  <TouchableOpacity onPress={onPress} style={{ margin: 10, borderRadius: 10, overflow: 'hidden' }}>
    <Image source={item.image} style={{ width: 150, height: 150 }} />
    <Text style={{ fontSize: 16, marginTop: 5 }}>{item.name}</Text>
    <Text style={{ fontSize: 14, color: 'gray' }}>Harga: Rp{item.price}</Text>
  </TouchableOpacity>
);

const PromoBanner = () => (
  <View style={{ backgroundColor: '#f0f0f0', padding: 10, alignItems: 'center', marginBottom: 20 }}>
    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#900' }}>Promo Spesial Hari Ini!</Text>
    <Text style={{ fontSize: 16 }}>Diskon 20% untuk semua produk!</Text>
  </View>
);

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulate fetching products from API
    setProducts(dummyProducts);
  }, []);

  const renderItem = ({ item }) => <ProductItem item={item} onPress={() => navigation.navigate('ProductDetail', { product: item })} />;

  return (
    <View style={{ flex: 1 }}>
      {/* Promo Banner */}
      <PromoBanner />
      {/* Your FlatList component for displaying products */}
      <View style={{ flex: 1, padding: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Selamat Datang</Text>
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
        />
      </View>
      {/* Navigation Bar */}
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#ffffff',
          elevation: 3,
          paddingTop: 10,
          paddingBottom: 10,
          justifyContent: 'space-around', // To space icons evenly
        }}
      >
       
      </View>
    </View>
  );
};

export default HomeScreen;
