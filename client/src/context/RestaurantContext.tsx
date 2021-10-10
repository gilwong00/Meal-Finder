import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  SetStateAction,
  Dispatch
} from 'react';
import { Restaurant } from '../@types';
import { restaurantService } from '../services';
import { LocationContext } from './LocationContext';

interface RestaurantContext {
  restaurants: Array<Restaurant>;
  error: Error | null;
  loading: boolean;
  setRestaurants: Dispatch<SetStateAction<Array<Restaurant>>>;
  setError: Dispatch<SetStateAction<Error | null>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

export const RestaurantContext = createContext<RestaurantContext>({
  restaurants: [],
  error: null,
  loading: false,
  setRestaurants: () => undefined,
  setError: () => undefined,
  setLoading: () => undefined
});

export const RestaurantProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const { location } = useContext(LocationContext);
  const [restaurants, setRestaurants] = useState<Array<Restaurant>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);
    setTimeout(async () => {
      try {
        const data = await restaurantService.getRestaurants(
          `${location?.lat},${location?.lng}`
        );

        setRestaurants(data as any);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }, 2000);
  }, [location]);

  return (
    <RestaurantContext.Provider
      value={{
        restaurants,
        error,
        loading,
        setRestaurants,
        setError,
        setLoading
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};

export default RestaurantProvider;
