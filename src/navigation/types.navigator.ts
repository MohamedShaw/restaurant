import {FunctionComponent} from 'react';
import {RestaurantList} from '../screens';
import {ProductDetails} from '../screens/productDetails';

export interface Screen {
  name: keyof RootStackParamList;
  component: FunctionComponent<any>;
}

export type RootStackParamList = {
  home: undefined;
  productDetails: {id: any};
};

export const screens: Screen[] = [
  {name: 'home', component: RestaurantList},
  {name: 'productDetails', component: ProductDetails},
];
