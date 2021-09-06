export interface Restaurant {
  name: string;
  icon: string;
  photos: Array<string>;
  vicinity: string;
  isOpenNow: boolean;
  rating: number;
  isClosedTemporarily: boolean;
}
