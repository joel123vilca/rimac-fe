import { createReducer } from "@reduxjs/toolkit";
import * as plansActions from "../actions/plansActions";

const initialState = {
  plans: [],
  detailPlan: null,
};

const PlansReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(plansActions.setPlans, (state, { payload }) => ({
      ...state,
      plans: payload,
    }))
    .addCase(plansActions.setDetail, (state, { payload }) => ({
      ...state,
      detailPlan: payload,
    }));
});

export default PlansReducer;
