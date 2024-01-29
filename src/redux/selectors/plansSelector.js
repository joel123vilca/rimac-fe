import { createSelector } from "@reduxjs/toolkit";

export const plansStateSelector = createSelector(
  (state) => state.plans,
  (plans) => plans
);

export const plansSelector = createSelector(
  plansStateSelector,
  (state) => state.plans
);

export const planSelector = createSelector(
  plansStateSelector,
  (state) => state.detailPlan
);
