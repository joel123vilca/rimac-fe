import { createReducer } from "@reduxjs/toolkit";
import * as userActions from "../actions/userActions";

const initialState = {
  user: null,
  userData: null,
};

const UserReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(userActions.setUser, (state, { payload }) => ({
      ...state,
      user: payload,
    }))
    .addCase(userActions.setDataUser, (state, { payload }) => ({
      ...state,
      userData: payload,
    }));
});

export default UserReducer;
