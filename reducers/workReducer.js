import { FETCH_WORKS } from "../actions/index";

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_WORKS:
      return action.payload.data;
    default:
      return state;
  }
};
