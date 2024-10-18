import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { register, logIn, logOut, refreshCurrentUser } from "./operations";
import { IAuthState } from "../../interface-ts/interface";


const initialState = {
  isRegisterIn: false,
  isLoading: false,
  isLoggedIn: false,
  token: null,
  user: { id: null, name: null, email: null, subscription: null, avatar: null },
  isRefreshing: false,
  error: null,
// };
} as IAuthState;

const handlePending = (state: any, action: any) => {
  state.isLoading = true;
};
const handleRejected = (state: any, { payload }: any) => {
  state.isLoading = false;
  state.error = payload;
};
const handleResetState = (state: any, action: any) => {
  state.user = initialState.user;
  state.token = null;
  state.isRegisterIn = false;
  state.isLoggedIn = false;
  state.isLoading = false;
  state.error = "";
};


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state: any, { payload }) => {
        state.user = payload.user;
        state.isRegisterIn = true;
        state.isLoggedIn = false;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(logIn.fulfilled, (state: any, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isRegisterIn = true;
        state.isLoggedIn = true;
        state.error = null;
      })
      // .addCase(signInGoogle.fulfilled,signInGoogle.pending, signInGoogle.rejected, (state, action) => {
      // })
      .addCase(refreshCurrentUser.pending, (state: any) => {
        state.isRefreshing = true;
      })
      .addCase(refreshCurrentUser.fulfilled, (state: any, _) => {
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addMatcher(
        isAnyOf(refreshCurrentUser.rejected, logOut.fulfilled),
        handleResetState
      )
      .addMatcher(
        isAnyOf(register.pending, logIn.pending, logOut.pending, logIn.pending),
        handlePending
      )
      .addMatcher(isAnyOf(register.rejected, logIn.rejected), handleRejected);
  },
});

export const authReducer = authSlice.reducer;
