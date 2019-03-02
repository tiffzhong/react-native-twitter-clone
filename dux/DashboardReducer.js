import { combineReducers } from "redux";
const INITIAL_STATE = {
  access_code: ""
};

const GET_ACCESS = "GET_ACCESS";

const dashboardReducer = (state = INITIAL_STATE, action) => {
  console.log("reducerlog", action.type, action.payload);
  switch (action.type) {
    case GET_ACCESS:
      return { ...state, access_code: action.payload };
    default:
      return state;
  }
};

export function setAccessCode(code) {
  console.log(code);
  return {
    type: GET_ACCESS,
    payload: code
  };
}

export default combineReducers({
  dashboard: dashboardReducer
});
