import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const StockPricePrediction = () => {
  const [newsHeadlines, setNewsHeadlines] = useState('');
  const [openValue, setOpenValue] = useState('');
  const [adjCloseValue, setAdjCloseValue] = useState('');
  const [prediction, setPrediction] = useState('');
  const [error, setError] = useState('');

  const handlePredict = async () => {
    if (!newsHeadlines || !openValue || !adjCloseValue) {
      setError('All fields are required');
      return; // Exit early if any field is empty
    }
  
    setError('');
  
    // Make API request to predict stock value
    try {
      const open=parseFloat(openValue.trim());
      const adj=parseFloat(adjCloseValue.trim());

      const response = await fetch('http://192.168.93.253:8000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: newsHeadlines.trim(),
          open: open,
          adj_close: adj,
        }),
      });
  
      const data = await response.json();
      setPrediction(parseFloat(data.prediction));
    } catch (error) {
      console.error('Error predicting stock:', error);
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Stock Prediction</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter news headlines"
        onChangeText={text => setNewsHeadlines(text)}
        value={newsHeadlines}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter open value"
        onChangeText={text=>setOpenValue(text)}
        value={openValue.toString()}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter adj_close value"
        onChangeText={text=>setAdjCloseValue(text)}
        value={adjCloseValue.toString()}
        keyboardType="numeric"
      />
      <Button
        title="Predict"
        onPress={handlePredict}
        color="#31A062"
      />
      {error !== '' &&
        <Text style={styles.error}>{error}</Text>
      }
      {prediction != '' &&
        <Text style={styles.prediction}>Predicted Stock Price: {prediction}</Text>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#31A062',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    marginTop: 10,
  },
  error: {
    marginTop: 10,
    color: 'red',
  },
  prediction: {
    marginTop: 20,
    fontWeight: 'bold',
  },
});

export default StockPricePrediction;
