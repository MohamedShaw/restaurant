import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ProductListHoc} from '../../hoc';

export const RestaurantList = () => {
  return (
    <SafeAreaView style={{flex:1, alignSelf:'stretch'}}>
      <ProductListHoc />
    </SafeAreaView>
  );
};
