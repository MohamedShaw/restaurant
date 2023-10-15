import {NavigationProp} from '@react-navigation/native';
import React, {FC} from 'react';
import {ProductDetailsHoc} from '../../hoc/productList/productDetails.hoc';
import {RootStackParamList} from '../../navigation/types.navigator';

type ProfileScreenNavigationProp = NavigationProp<
  RootStackParamList,
  'productDetails'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
  route: {params: RootStackParamList['productDetails']};
};
export const ProductDetails: FC<Props> = ({route: {params}}) => {
  return <ProductDetailsHoc id={params?.id} />;
};
