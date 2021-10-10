/* eslint-disable curly */
import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { SafeAreaView, StatusBar, FlatList, View } from 'react-native';
import { RestaurantInfo } from '../components/Restaurant';
import { Searchbar } from '../components/Searchbar';
import { RestaurantContext } from '../context/RestaurantContext';
import { Restaurant } from '../@types';
import { Spinner, Pressable } from 'native-base';

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
  position: absolute;
  top: 50%;
  left: 50%;
`;

const Loader = styled(Spinner)`
  margin-left: -25px;
`;

//https://reactnavigation.org/docs/5.x/typescript
type RootStackParamList = {
  Restaurants: undefined;
  RestaurantDetail: undefined;
};

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'RestaurantDetail'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};
const RestaurantsScreen: React.FC<Props> = ({ navigation }) => {
  const { restaurants, loading } = useContext(RestaurantContext);

  if (loading)
    return (
      <LoadingContainer>
        <Loader size='lg' accessibilityLabel='loading' color='purple.800' />
      </LoadingContainer>
    );

  return (
    <SafeArea>
      <Searchbar />
      <RestaurantList
        data={restaurants}
        renderItem={({ item }: { item: Restaurant }) => (
          <Pressable onPress={() => navigation.navigate('RestaurantDetail')}>
            <RestaurantInfo restaurant={item} />
          </Pressable>
        )}
        keyExtractor={(item: Restaurant) => item?.name}
      />
    </SafeArea>
  );
};

export default RestaurantsScreen;
