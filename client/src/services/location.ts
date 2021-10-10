/* eslint-disable curly */
import { mockLocations } from './mocks';

interface LocationService {
  getLocation: (searchTerm: string) => Promise<{ lat: number; lng: number }>;
}

const locationService: LocationService = {
  getLocation: async (searchTerm: string) => {
    return new Promise((resolve, reject) => {
      if (searchTerm in mockLocations) {
        const { results } = mockLocations[searchTerm];
        const { lng, lat } = results[0].geometry.location;
        return resolve({ lng, lat });
      }
      return reject('Location not found');
    });
  }
};

export default locationService;
