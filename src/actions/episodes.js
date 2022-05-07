import request from "../utils/request";
import { FETCH_EPISODE, FETCH_EPISODES, FETCH_LOADING } from "./types";

export const createEpisode = (values, history) => async (dispatch) => {
  dispatch({ type: FETCH_LOADING, payload: true });

  const res = await request("/episodes", {
    data: values,
    method: "post",
  });

  dispatch({ type: FETCH_LOADING, payload: false });
};

export const fetchEpisodes = () => async (dispatch) => {
  dispatch({ type: FETCH_LOADING, payload: true });

  const res = await request("/episodes");

  dispatch({ type: FETCH_EPISODES, payload: res.data.episodes });
  dispatch({ type: FETCH_LOADING, payload: false });
};

export const fetchEpisode = (id) => async (dispatch) => {
  dispatch({ type: FETCH_LOADING, payload: true });

  const res = await request("/episodes/" + id);
  dispatch({ type: FETCH_EPISODE, payload: res.data.episode });
  dispatch({ type: FETCH_LOADING, payload: false });
};

export const updateEpisode = (values, id) => async (dispatch) => {
  dispatch({ type: FETCH_LOADING, payload: true });
  const res = await request("/episodes/" + id, {
    method: "put",
    data: values,
  });
  dispatch({ type: FETCH_EPISODE, payload: res.data.episode });
  dispatch({ type: FETCH_LOADING, payload: false });
};
