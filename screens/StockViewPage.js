import React, { useState } from 'react';
import { View, StyleSheet, TextInput, FlatList } from 'react-native';
import StockItem from './StockItem';

const StockViewPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  // Sample data for companies
  const companies = [
    { id: 1, name: 'Apple', percent:"12% decrease", trend: 'decrease' },
    { id: 2, name: 'Tesla',percent:"5% increase", trend: 'increase' },
    { id: 3, name: 'Nifty',percent:"4.5% increase", trend: 'increase' },
    { id: 4, name: 'Adani',percent:"7.78% increase", trend: 'increase' },
    { id: 5, name: 'Reliance',percent:"2.3% increase", trend: 'increase' },
    { id: 6, name: 'Sensex',percent:"9.3% decrease", trend: 'decrease' },
    { id: 7, name: 'Google',percent:"0.45% increase", trend: 'increase' },
  ];

  const handleSearch = (text) => {
    setSearchQuery(text);
    const newData = companies.filter((item) => {
      const itemName = item.name.toLowerCase();
      const query = text.toLowerCase();
      return itemName.indexOf(query) > -1;
    });
    setFilteredData(newData);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredData.length > 0 ? filteredData : companies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <StockItem companyName={item.name} percent={item.percent} trend={item.trend} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  searchInput: {
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    borderColor:'black',
    borderWidth:2,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
});

export default StockViewPage;
