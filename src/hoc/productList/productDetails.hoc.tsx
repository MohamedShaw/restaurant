import React from 'react';
import {ActivityIndicator, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useProductById} from '../../hooks';
export const ProductDetailsHoc = id => {
  const {data, isLoading} = useProductById(id);

  if (isLoading) return <ActivityIndicator />;

  return (
    <SafeAreaView style={{flex: 1, alignSelf: 'stretch', alignItems: 'center'}}>
      <Text>{data.name}</Text>
      <Text>{data.location.address1}</Text>
    </SafeAreaView>
  );
};
