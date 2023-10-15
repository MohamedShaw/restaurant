import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList, Screen, screens} from './types.navigator';

const Stack = createNativeStackNavigator<RootStackParamList>();
export const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={'home'}
      screenOptions={() => ({
        headerShown: false,
      })}>
      {screens.map(({component, name}: Screen) => {
        const Component = component;
        return (
          <Stack.Screen
            key={name}
            name={name}
            options={{
              animation: 'default',
              animationDuration: 200,
            }}>
            {props => {
              return (
                <>
                  <Component {...props} />
                </>
              );
            }}
          </Stack.Screen>
        );
      })}
    </Stack.Navigator>
  );
};
