import { FETCH_LOADING } from "../../actions/types";

export const loading = (state = false, action) => {
  switch (action.type) {
    case FETCH_LOADING:
      return action.payload;
    default:
      return state;
  }
};
