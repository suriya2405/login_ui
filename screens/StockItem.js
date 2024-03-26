import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const StockItem = ({ companyName,percent, trend }) => {
  let boxColor, textColor, graphColor;
  
  if (trend === 'increase') {
    boxColor = ['#2AFB08', '#31A078'];
    textColor = '#FFFFFF';
    graphColor = '#31A078';
  } else {
    boxColor = ['#F20C0C', '#a03149'];
    textColor = '#FFFFFF';
    graphColor = '#a03149';
  }

  const graphIcon = trend === 'increase' ? '▲' : '▼';

  return (
    <LinearGradient colors={boxColor} style={[styles.container, { borderRadius: 10, padding: 10, marginVertical: 5 }]}>
  <View style={styles.innerContainer}>
    <Text style={[styles.companyName, { color: textColor }]}>{companyName}</Text>
    <Text style={[styles.companyName, { color: textColor }]}>{percent}</Text>
    <Text style={[styles.graph, { color: graphColor }]}>{graphIcon}</Text>
  </View>
</LinearGradient>

    // <LinearGradient colors={boxColor} style={styles.container}>
    // <View style={styles.container}>
    //   <Text style={[styles.companyName, { color: textColor }]}>{companyName}</Text>
    //   <Text style={[styles.companyName, { color: textColor }]}>{percent}</Text>
    //   <Text style={[styles.graph, { color: graphColor }]}>{graphIcon}</Text>
    // </View>
    // </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    marginVertical: 5,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  companyName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  graph: {
    fontSize: 20,
  },
});

export default StockItem;
