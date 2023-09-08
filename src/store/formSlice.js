import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    email: '',
    password: '',
    isRegister: false,
    username: '',
    confirmPassword: '',
    isButtonActive: false,
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setIsRegister: (state, action) => {
      state.isRegister = action.payload;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setConfirmPassword: (state, action) => {
      state.confirmPassword = action.payload;
    },
    setIsButtonActive: (state, action) => {
      state.isButtonActive = action.payload;
    },
  },
});

export const { setEmail, setPassword, setIsRegister, setUsername, setConfirmPassword, setIsButtonActive } =
  formSlice.actions;

export default formSlice.reducer;
