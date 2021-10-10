import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RestaurantsScreen } from '../screens';
import { Text } from 'native-base';

const RestaurantNavigator = () => {
  const RestaurantStack = createStackNavigator();
  return (
    <RestaurantStack.Navigator headerMode='none'>
      <RestaurantStack.Screen
        name='Restaurants'
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name='RestaurantDetail'
        component={() => <Text>Detail screen</Text>}
      />
    </RestaurantStack.Navigator>
  );
};

export default RestaurantNavigator;
