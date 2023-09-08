import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './categorySlice';
import formReducer from './formSlice';
import userReducer from './userSlice';

const store = configureStore({
  reducer: {
    categories: categoryReducer,
    form: formReducer,
    user: userReducer,
  },
});

export default store;
