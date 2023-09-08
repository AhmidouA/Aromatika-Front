import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: null, // New
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    isButtonActive: false,
  },
  reducers: {
    setId: (state, action) => {
      // Nouvelle action
      state.id = action.payload;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setConfirmPassword: (state, action) => {
      state.confirmPassword = action.payload;
    },
    setIsButtonActive: (state, action) => {
      state.isButtonActive = action.payload;
    },
  },
});

export const { setId, setUsername, setEmail, setPassword, setConfirmPassword, setIsButtonActive } = userSlice.actions;

export default userSlice.reducer;
