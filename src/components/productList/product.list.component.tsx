import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useMemo, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {Price} from '../../hooks';
import {RootStackParamList} from '../../navigation/types.navigator';
import {styles} from './styles';

const HeaderList = ({onToggel}) => {
  return (
    <View style={styles.sectionHeader}>
      <Text>Cost Effective</Text>
      <TouchableOpacity
        onPress={() => onToggel()}
        style={{
          borderRadius: 20,
          minWidth: 100,
          justifyContent: 'center',
          alignItems: 'center',
          height: 40,
          backgroundColor: 'red',
        }}>
        <Text>Toggel</Text>
      </TouchableOpacity>
    </View>
  );
};
export const ProductList = ({data}) => {
  const [grid, setGrid] = useState(false);
  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();

  const [search, setSearch] = useState('');

  const mapped_Data = useMemo(() => {
    if (search) {
      return {
        [Price.COST]: data[Price.COST]?.filter(it => it.name.includes(search)),
        [Price.BIT]: data[Price.BIT]?.filter(it => it.name.includes(search)),
        [Price.BI]: data[Price.BI]?.filter(it => it.name.includes(search)),
      };
    } else {
      return data;
    }
  }, [search]);

  console.log('mapped_Data', mapped_Data);

  return (
    <View style={styles.container}>
      <TextInput
        value={search}
        onChangeText={setSearch}
        style={{height: 40, width: '100%', borderWidth: 1, borderRadius: 10}}
      />
      <HeaderList onToggel={() => setGrid(!grid)} />
      <ScrollView>
        {Object.entries(mapped_Data)?.map(([key, value]) => {
          if (!value?.length) return null;
          return (
            <>
              <Text>{key}</Text>
              <FlatList
                data={value as []}
                renderItem={({item}) => (
                  <TouchableOpacity
                    style={styles.item}
                    onPress={() => navigate('productDetails', {id: item.id})}>
                    <ImageBackground
                      style={{flex: 1, width: '100%'}}
                      source={{
                        uri: item.image_url,
                      }}>
                      <Text style={styles.txt600}>{item.name}</Text>
                      <View style={styles.position}>
                        <Text
                          style={{
                            fontWeight: '700',
                          }}>
                          {item.rating} Stars
                        </Text>

                        <Text
                          style={{
                            fontWeight: '700',
                          }}>
                          {item.review_count} Reviews
                        </Text>
                      </View>
                    </ImageBackground>
                  </TouchableOpacity>
                )}
                style={{flex: 1}}
                numColumns={grid ? 2 : 1}
              />
            </>
          );
        })}
      </ScrollView>
    </View>
  );
};

[
  {'Bi Spender': [], 'Bit Pricer': [[Object], [Object]], 'Cost Effective': []},
  {'Bi Spender': [], 'Bit Pricer': [[Object], [Object]], 'Cost Effective': []},
  {'Bi Spender': [], 'Bit Pricer': [[Object], [Object]], 'Cost Effective': []},
];
