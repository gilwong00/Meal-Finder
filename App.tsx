/* eslint-disable curly */
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, View, Text } from 'native-base';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RestaurantsScreen } from './src/screens';
import {
  useFonts as useOswald,
  Oswald_400Regular
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { MaterialIcons } from '@expo/vector-icons';
import theme from './src/theme';

function Settings() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function Map() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Map!</Text>
    </View>
  );
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular
  });

  const [latoLoaded] = useLato({
    Lato_400Regular
  });

  if (!oswaldLoaded || !latoLoaded) return null;

  const Tab = createBottomTabNavigator();

  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: 'purple'
          }}
        >
          <Tab.Screen
            name='Restaurants'
            component={RestaurantsScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <MaterialIcons name='restaurant' color={color} size={26} />
              )
            }}
          />
          <Tab.Screen
            name='Map'
            component={Map}
            options={{
              tabBarIcon: ({ color }) => (
                <MaterialIcons name='map' color={color} size={26} />
              )
            }}
          />
          <Tab.Screen
            name='Settings'
            component={Settings}
            options={{
              tabBarIcon: ({ color }) => (
                <MaterialIcons name='settings' color={color} size={26} />
              )
            }}
          />
        </Tab.Navigator>
        <ExpoStatusBar style='auto' />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
