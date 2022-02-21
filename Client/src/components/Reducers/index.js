import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

const INITIAL_STATE = {
  isSigned: null,
  userId: null,
};

const authState = (authState = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return { ...authState, isSigned: true, userId: action.payload };
    case "SIGN_OUT":
      return { ...authState, isSigned: false, userId: null };
    default:
      return authState;
  }
};

export default combineReducers({ authState: authState, form: formReducer });
