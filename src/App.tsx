import React from 'react';
import {Provider} from 'react-redux';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {LogBox} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './store';

import {NavigatorsContainer} from './navigation/navigators-container.navigator';

export default function App() {
  LogBox.ignoreAllLogs();

  return (
    <GestureHandlerRootView style={{flex: 1, backgroundColor:'red'}}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigatorsContainer />
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
}
