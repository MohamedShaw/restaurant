import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from '@reduxjs/toolkit';
import {PersistConfig, persistReducer} from 'redux-persist';
import {ProductReducer} from '../slices';

const reducers = combineReducers({
  product: ProductReducer,
});

export type RootState = ReturnType<typeof reducers>;

const persistConfig: PersistConfig<RootState> = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['product'],
};

export const rootReducer = persistReducer(persistConfig, reducers);

export type RootStore = ReturnType<typeof reducers>;
