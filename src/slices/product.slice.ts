import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {useSelector} from 'react-redux';
import {Products} from '../models';
import {RootState} from '../store';

interface AuthState {
  product: Products | null;
}

const initialState: AuthState = {
  product: null,
};

const productSlice = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {
    addProduct(state, {payload}: PayloadAction<Products>) {
      state.product = payload;
      return state;
    },

    remove(state) {
      state.product = null;
    },
    updateProductList(state, {payload}: PayloadAction<Products>) {
      if (payload) {
        state.product = payload;
      }
    },
  },
});

export const useProductSelector = () =>
  useSelector((state: RootState) => state.product.product);

export default productSlice.reducer;
export const {addProduct, remove, updateProductList} = productSlice.actions;
