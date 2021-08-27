import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { RestaurantsScreen } from './src/screens';

export default function App() {
  return (
    <NativeBaseProvider>
      <RestaurantsScreen />
      <ExpoStatusBar style='auto' />
    </NativeBaseProvider>
  );
}
