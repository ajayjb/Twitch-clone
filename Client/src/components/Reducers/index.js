import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import _ from "lodash";

const INITIAL_STATE = {
  isSigned: null,
  userId: null,
};

// Authstate reducer
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

// StreamReducer
const streamReducer = (stream = {}, action) => {
  switch (action.type) {
    case "FETCH_STREAM":
      return { ...stream, [action.payload.id]: action.payload };
    case "CREATE_STREAM":
      return { ...stream, [action.payload.id]: action.payload };
    case "EDIT_STREAM":
      return { ...stream, [action.payload.id]: action.payload };
    case "DELETE_STREAM":
      return _.omit(stream, action.payload);
    case "FETCH_STREAMS":
      // Or you can do same using _ library.
      // return {...streams, ..._mapKeys(stream, "id")} and you must pass id as string
      let newState = { ...stream };
      action.payload.forEach((element) => {
        newState[element.id] = element;
      });
      return newState;
    default:
      return stream;
  }
};

export default combineReducers({
  authState: authState,
  streams: streamReducer,
  form: formReducer,
});
