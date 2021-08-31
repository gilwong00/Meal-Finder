import React from 'react';
import {
  Image,
  Text,
  Box,
  Stack,
  Heading,
  Icon,
  useTheme,
  Flex
} from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { Star } from '../Star';
import { OpenNowIcon } from '../OpenNowIcon';
// import styled from 'styled-components/native';

interface RestaurantInfoProps {
  restaurant: {
    name: string;
    icon: string;
    photos: Array<string>;
    address: unknown;
    isOpenNow: boolean;
    rating: number;
    isClosedTemporarily: boolean;
  };
}

const RestaurantInfo: React.FC<RestaurantInfoProps> = ({ restaurant }) => {
  const { fontSizes } = useTheme();
  const ratings = Array.from(new Array(Math.floor(restaurant.rating ?? 3)));

  return (
    <Box bg='bg.primary' shadow={2} rounded='lg' maxWidth='100%' mb={5}>
      <Image
        source={{
          uri: 'https://sample-example.nativebase.io/static/media/dawki-river.ebbf5434.png'
        }}
        alt='image base'
        resizeMode='cover'
        height={150}
        roundedTop='md'
      />
      <Icon
        position='absolute'
        color='white'
        top={0}
        right={0}
        m={[4, 4, 8]}
        as={<MaterialIcons name='favorite-outline' />}
      />

      <Stack space={4} p={[4, 4, 8]}>
        <Heading
          size={'md'}
          noOfLines={2}
          color='ui.primary'
          fontSize={fontSizes.body}
        >
          Restaurant Name
        </Heading>

        <Flex direction='row' justifyContent='space-between'>
          <Flex direction='row'>
            {ratings.map((_, i) => (
              <Star key={i} />
            ))}
          </Flex>
          <Flex direction='row-reverse' justifyContent='space-between'>
            {restaurant.isOpenNow && <OpenNowIcon />}
            {restaurant.isClosedTemporarily && (
              <Text px={5} color='text.error'>
                CLOSED TEMPORARILY
              </Text>
            )}
          </Flex>
        </Flex>

        <Text
          lineHeight={[5, 5, 7]}
          noOfLines={2}
          color='gray.700'
          fontFamily='body'
          fontSize={fontSizes.caption}
        >
          Restaurant Address
        </Text>
      </Stack>
    </Box>
  );
};

export default RestaurantInfo;
