import React from 'react';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native';
import { RestaurantInfo } from '../components/Restaurant';
import { Searchbar } from '../components/Searchbar';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: 16px;
`;

interface RestaurantsScreenProps {}

const RestaurantsScreen: React.FC<RestaurantsScreenProps> = () => {
  return (
    <SafeArea>
      <Searchbar />
      <RestaurantListContainer>
        <RestaurantInfo />
      </RestaurantListContainer>
    </SafeArea>
  );
};

export default RestaurantsScreen;
