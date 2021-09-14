/* eslint-disable curly */
import React, {
  useState,
  useEffect,
  createContext,
  SetStateAction,
  Dispatch
} from 'react';
import { LatLng } from '../@types';
import { locationService } from '../services';

interface LocationContext {
  isLoading: boolean;
  location: LatLng | null;
  searchTerm: string;
  error: Error | null;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  handleSearch: (term: string) => Promise<void>;
}

export const LocationContext = createContext<LocationContext>({
  isLoading: false,
  location: null,
  searchTerm: '',
  error: null,
  setSearchTerm: () => undefined,
  handleSearch: async () => undefined
});

export const LocationProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const [searchTerm, setSearchTerm] = useState<string>('San Francisco');
  const [location, setLocation] = useState<LatLng | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const handleSearch = async (term: string) => {
    try {
      if (!term) return;

      setIsLoading(true);
      const result = await locationService.getLocation(
        term.toLocaleLowerCase()
      );
      setLocation(result);
    } catch (err) {
      setError(err as Error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleSearch(searchTerm);
  }, [searchTerm]);

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        location,
        searchTerm,
        error,
        setSearchTerm,
        handleSearch
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export default LocationProvider;
