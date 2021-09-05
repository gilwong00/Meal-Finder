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

export const getRestaurants = async (location: string): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    const data = MOCK_MAP[location];
    if (location in MOCK_MAP) return resolve(camelize(data));
    return reject('No location data found');
  });
};
