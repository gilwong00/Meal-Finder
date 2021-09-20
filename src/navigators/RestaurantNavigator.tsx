import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RestaurantsScreen } from '../screens';

const RestaurantNavigator = () => {
  const RestaurantStack = createStackNavigator();
  return (
    <RestaurantStack.Navigator headerMode='none'>
      <RestaurantStack.Screen
        name='Restaurants'
        component={RestaurantsScreen}
      />
    </RestaurantStack.Navigator>
  );
};

export default RestaurantNavigator;
