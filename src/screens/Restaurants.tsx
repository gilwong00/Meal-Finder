import React from 'react';
import styled from 'styled-components/native';
import { SafeAreaView, StatusBar, FlatList } from 'react-native';
import { RestaurantInfo } from '../components/Restaurant';
import { Searchbar } from '../components/Searchbar';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar?.currentHeight && `margin-top: ${StatusBar?.currentHeight}px`}
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16
  }
})``;

interface RestaurantsScreenProps {}

const RestaurantsScreen: React.FC<RestaurantsScreenProps> = () => {
  return (
    <SafeArea>
      <Searchbar />
      <RestaurantList
        data={[
          { name: 'temp', rating: 4 },
          { name: 'temp2', rating: 2 }
        ]}
        renderItem={() => <RestaurantInfo restaurant={{} as any} />}
        keyExtractor={(item: any) => item?.name as any}
      />
    </SafeArea>
  );
};

export default RestaurantsScreen;
