import React from 'react';
import {ActivityIndicator, Text} from 'react-native';
import {ProductList} from '../../components';
import {useProduct} from '../../hooks';
export const ProductListHoc = () => {
  const {data, isLoading, error, onRefresh} = useProduct();

  if (isLoading) {
    return <ActivityIndicator />;
  } else if (error) {
    return (
      <Text>
        Error happen{' '}
        <Text
          onPress={() => onRefresh()}
          style={{
            textDecorationLine: 'underline',
            color: 'red',
            fontWeight: '600',
          }}>
          Try Again
        </Text>
      </Text>
    );
  }
  return <ProductList data={data} />;
};
