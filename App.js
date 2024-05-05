import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { FONTS } from './constants/fonts';
import Login from './screens/Login'; // Assuming Login and Signup are also in the same directory
import Signup from './screens/Signup';
import Welcome from './screens/Welcome';
import Dashboard from './screens/Dashboard'; // Correct import path
import StockViewPage from './screens/StockViewPage';
import StockPricePrediction from './screens/Stockpriceprediction';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts(FONTS);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }} // Fixed typo here
          initialRouteName="Welcome" // Fixed typo here
        >
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="StockViewPage" component={StockViewPage} />
          <Stack.Screen name="StockPricePrediction" component={StockPricePrediction} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
