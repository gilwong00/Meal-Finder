import React from 'react';
import { Image, Text, Box, Stack, Heading } from 'native-base';
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

const RestaurantInfo: React.FC<RestaurantInfoProps> = ({
  restaurant = { name: 'temp' }
}) => {
  return (
    <Box bg='white' shadow={2} rounded='lg' maxWidth='100%'>
      <Image
        source={{
          uri: 'https://sample-example.nativebase.io/static/media/dawki-river.ebbf5434.png'
        }}
        alt='image base'
        resizeMode='cover'
        height={150}
        roundedTop='md'
      />
      <Text bold position='absolute' color='white' top={0} m={[4, 4, 8]}>
        NEWS
      </Text>
      <Stack space={4} p={[4, 4, 8]}>
        <Text color='gray.400'>June 22, 2021</Text>
        <Heading size={'md'} noOfLines={2}>
          The Stunning Dawki River in Meghalaya is So Clear That Boats Appear
          Floating in Air
        </Heading>
        <Text lineHeight={[5, 5, 7]} noOfLines={4} color='gray.700'>
          With lush green meadows, rivers clear as crystal, pine-covered hills,
          gorgeous waterfalls, lakes and majestic forests, the mesmerizing.
          Meghalaya is truly a Nature lover’s paradise…
        </Text>
      </Stack>
    </Box>
  );
};

export default RestaurantInfo;
