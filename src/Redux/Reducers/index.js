import { combineReducers } from "redux";

import userReducer from "./Dynamicform.reducer";

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
