/* eslint-disable curly */
import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { SafeAreaView, StatusBar, FlatList, View } from 'react-native';
import { RestaurantInfo } from '../components/Restaurant';
import { Searchbar } from '../components/Searchbar';
import { RestaurantContext } from '../context/RestaurantContext';
import { Restaurant } from '../@types';
import { Spinner } from 'native-base';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar?.currentHeight && `margin-top: ${StatusBar?.currentHeight}px`}
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16
  }
})``;

const LoadingContainer = styled(View)`
  position: 'absolute';
  top: '50%';
  left: '50%';
`;

interface RestaurantsScreenProps {}

const RestaurantsScreen: React.FC<RestaurantsScreenProps> = () => {
  const { restaurants, loading } = useContext(RestaurantContext);

  if (loading)
    return (
      <LoadingContainer>
        <Spinner
          size='lg'
          style={{ marginLeft: -20 }}
          accessibilityLabel='loading'
          color='purple.800'
        />
      </LoadingContainer>
    );

  return (
    <SafeArea>
      <Searchbar />
      <RestaurantList
        data={restaurants}
        renderItem={({ item }: { item: Restaurant }) => (
          <RestaurantInfo restaurant={item} />
        )}
        keyExtractor={(item: Restaurant) => item?.name}
      />
    </SafeArea>
  );
};

export default RestaurantsScreen;
