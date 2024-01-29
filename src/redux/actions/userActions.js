import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import UserController from "../controllers/userController";

export const types = {
  GET_USER: "GET_USER",
  SET_USER: "SET_USER",
  SET_DATA_USER: "SET_DATA_USER",
  SAVE_DATA: "SAVE_DATA",
};

export const getUser = createAsyncThunk(
  types.GET_USER,
  async (_, { dispatch }) => {
    const response = await UserController.getUser();
    dispatch(setUser(response));
    return response;
  }
);

export const setUser = createAction(types.SET_USER, (user) => ({
  payload: user,
}));

export const setDataUser = createAction(types.SET_DATA_USER, (user) => ({
  payload: user,
}));

export const saveUserToLocalStorage = createAsyncThunk(
  types.SAVE_DATA,
  (user, { _ }) => {
    localStorage.setItem("user", JSON.stringify(user));
  }
);

export const getUserFromLocalStorage = createAsyncThunk(
  types.GET_USER,
  (_, { dispatch }) => {
    const storedUser = localStorage.getItem("user");
    const data = storedUser ? JSON.parse(storedUser) : null;
    dispatch(setDataUser(data));
  }
);
