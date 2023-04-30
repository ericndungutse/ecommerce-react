import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // A verified Token
  token: '',
  username: '',
  checkingUser: true,
  signedIn: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    setUser: (state, action) => {
      state.token = action.payload.token;
      state.username = action.payload.username;
      state.checkingUser = false;
      state.signedIn = true;
    },
    logOutUser: (state) => {
      state.token = '';
      state.username = '';
      state.checkingUser = false;
      state.signedIn = false;
    },

    noUser: (state) => {
      state.token = '';
      state.username = '';
      state.checkingUser = false;
      state.signedIn = false;
    },
  },
});

export const { setUser, logOutUser, noUser } = userSlice.actions;

export default userSlice.reducer;
