import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import PlansController from "../controllers/plansController";

export const types = {
  GET_PLANS: "GET_PLANS",
  SET_PLANS: "SET_PLANS",
  SET_DETAIL_PLAN: "SET_DETAIL_PLAN",
  GET_PLAN: "GET_PLAN",
  SAVE_PLAN: "SAVE_PLAN",
};

export const getPlans = createAsyncThunk(
  types.GET_PLANS,
  async (_, { dispatch }) => {
    const response = await PlansController.getPlans();
    dispatch(setPlans(response));
    return response;
  }
);

export const setPlans = createAction(types.SET_PLANS, (plans) => ({
  payload: plans,
}));

export const setDetail = createAction(types.SET_DETAIL_PLAN, (detailPlan) => ({
  payload: detailPlan,
}));

export const savePlanToLocalStorage = createAsyncThunk(
  types.SAVE_PLAN,
  (plan, { _ }) => {
    localStorage.setItem("plan", JSON.stringify(plan));
  }
);

export const getPlanFromLocalStorage = createAsyncThunk(
  types.GET_PLAN,
  (_, { dispatch }) => {
    const storedPlan = localStorage.getItem("plan");
    const data = storedPlan ? JSON.parse(storedPlan) : null;
    dispatch(setDetail(data));
  }
);
