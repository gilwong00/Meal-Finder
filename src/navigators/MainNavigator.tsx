import React from 'react';
import { View, Text } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import RestaurantNavigator from './RestaurantNavigator';

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

const MainNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Restaurants'
        tabBarOptions={{
          activeTintColor: 'purple'
        }}
      >
        <Tab.Screen
          name='Restaurants'
          component={RestaurantNavigator}
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
    </NavigationContainer>
  );
};

export default MainNavigator;
