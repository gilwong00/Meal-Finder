/* eslint-disable curly */
import camelize from 'camelize';
import {
  sanFranciscoMock,
  chicagoMock,
  torontoMock,
  antwerpMock
} from './mocks';

const MOCK_MAP: Record<string, unknown> = {
  '51.219448,4.402464': antwerpMock,
  '43.653225,-79.383186': torontoMock,
  '41.878113,-87.629799': chicagoMock,
  '37.7749295,-122.4194155': sanFranciscoMock
};

export const mockImages = [
  'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
  'https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-oranges-ice-600x750.jpg',
  'https://www.foodiesfeed.com/wp-content/uploads/2020/08/detail-of-pavlova-strawberry-piece-of-cake-600x800.jpg',
  'https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-baking-600x750.jpg',
  'https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-pancakes-600x750.jpg',
  'https://www.foodiesfeed.com/wp-content/uploads/2019/02/messy-pizza-on-a-black-table-600x400.jpg',
  'https://www.foodiesfeed.com/wp-content/uploads/2019/02/pizza-ready-for-baking-600x400.jpg'
];

const restaurantService = {
  getRestaurants: async (location: string = '37.7749295,-122.4194155') => {
    return new Promise((resolve, reject) => {
      if (location in MOCK_MAP) {
        const data = MOCK_MAP[location] as any;
        const mapped = data.results.map((restaurant: any) => ({
          ...restaurant,
          isOpenNow: restaurant?.opening_hours?.open_now ?? false,
          isClosedTemporarily:
            restaurant.business_status === 'CLOSED_TEMPORARILY',
          photos: restaurant.photos.map(() => {
            return mockImages[
              Math.ceil(Math.random() * (mockImages.length - 1))
            ];
          })
        }));

        return resolve(camelize(mapped));
      }
      return reject('No location data found');
    });
  }
};

export default restaurantService;
