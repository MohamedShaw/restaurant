import {NavigationContainer} from '@react-navigation/native';
import React, {FC} from 'react';
import {View} from 'react-native';

import {enableScreens} from 'react-native-screens';
import {RootNavigator} from './root.navigator';

enableScreens();
interface Props {}
export const NavigatorsContainer: FC<Props> = ({}) => {
  return (
    <>
      <View style={{flex: 1, backgroundColor: '#FFFFFF00'}}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </View>
    </>
  );
};
