import { createSlice } from '@reduxjs/toolkit';
import operations from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [operations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [operations.register.pending](state) {
      state.error = null;
    },
    [operations.register.rejected](state, action) {
      state.error = action.payload.message;
    },
    [operations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
    },
    [operations.logIn.pending](state) {
      state.error = null;
    },
    [operations.logIn.rejected](state, action) {
      state.error = action.payload.message;
    },
    [operations.logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.error = null;
    },
    [operations.logOut.pending](state, action) {
      state.error = null;
    },
    [operations.logOut.rejected](state, action) {
      state.error = action.payload.message;
    },
    [operations.fetchCurrentUser.pending](state) {
      state.isFetchingCurrentUser = true;
    },
    [operations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [operations.fetchCurrentUser.rejected](state) {
      state.isFetchingCurrentUser = false;
    },
  },
});
export default authSlice.reducer;
