import { combineReducers } from "redux";
import user from "./userReducer";
import plans from "./plansReducer";

export default combineReducers({
  user,
  plans,
});
