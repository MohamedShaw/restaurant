import {CommonActions, NavigationProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from './types.navigator';

interface ResetRoute {
  navigation:
    | NavigationProp<RootStackParamList>
    | NativeStackNavigationProp<RootStackParamList>;

  route: keyof RootStackParamList;
  params?: any;
}
export const resetToRoute = (props: ResetRoute) => {
  const {navigation, route, params} = props;
  navigation.dispatch(
    CommonActions.reset({
      index: 1,
      routes: [{name: route, params}],
    }),
  );
};
