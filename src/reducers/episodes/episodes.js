import { FETCH_EPISODES } from "../../actions/types";

export const episodes = (state = [], action) => {
  switch (action.type) {
    case FETCH_EPISODES:
      return action.payload;
    default:
      return state;
  }
};
