import React from 'react';
import styled from 'styled-components/native';
import { SafeAreaView, StatusBar } from 'react-native';
import { RestaurantInfo } from '../components/Restaurant';
import { Searchbar } from '../components/Searchbar';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar?.currentHeight && `margin-top: ${StatusBar?.currentHeight}px`}
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
        <RestaurantInfo restaurant={{} as any} />
      </RestaurantListContainer>
    </SafeArea>
  );
};

export default RestaurantsScreen;
