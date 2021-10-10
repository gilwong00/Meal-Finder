/* eslint-disable curly */
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { NativeBaseProvider } from 'native-base';
import {
  useFonts as useOswald,
  Oswald_400Regular
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import theme from './src/theme';
import { LocationProvider, RestaurantProdiver } from './src/context';
import { MainNavigator } from './src/navigators';

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular
  });

  const [latoLoaded] = useLato({
    Lato_400Regular
  });

  if (!oswaldLoaded || !latoLoaded) return null;

  return (
    <NativeBaseProvider theme={theme}>
      <LocationProvider>
        <RestaurantProdiver>
          <MainNavigator />
          <ExpoStatusBar style='auto' />
        </RestaurantProdiver>
      </LocationProvider>
    </NativeBaseProvider>
  );
}
