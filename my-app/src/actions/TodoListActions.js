//GET request to our endpoint to our API

import { axiosWithAuth } from "../utils/axiosWithAuth";

export const FETCH_LISTS_START = "FETCH_LISTS_START";
export const FETCH_LISTS_SUCCESS = "FETCH_LISTS_SUCCESS";
export const FETCH_LISTS_FAIL = "FETCH_LISTS_FAIL";
export const POSTED_LIST = "POSTED_LIST";
export const POST_LIST_FAIL = "POST_LIST_FAIL";
export const DELETE_LIST = "DELETE_LIST";
export const DELETE_LIST_FAIL = "DELETE_LIST_FAIL";

//GET LISTS
export const getLists = () => (dispatch) => {
  // dispatch({ type: FETCH_LISTS_START });
  axiosWithAuth()
    .get("/api/lists")
    .then((res) => {
      dispatch({ type: FETCH_LISTS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log("FETCH_LISTS_FAIL");
      dispatch({ type: FETCH_LISTS_FAIL, payload: err.res });
    });
};

//POST LIST
export const postList = (listFormValues) => (dispatch) => {
  axiosWithAuth()
    .post("/api/lists", listFormValues)
    .then((res) => {
      dispatch({ type: POSTED_LIST, payload: res.data });
    })
    .catch((err) => {
      console.log("POST_LISTS_FAIL - catch error");
      dispatch({ type: POST_LIST_FAIL, payload: err.res });
    });
};

//DELETE LIST
export const deleteList = (item) => (dispatch) => {
  axiosWithAuth()
    .delete(`/api/lists/${item.id}`)
    .then((res) => {
      console.log("res.data-DELETE:");
      dispatch({ type: DELETE_LIST, payload: res.data });
    })
    .catch((err) => {
      console.log("DELETE LIST FAIL - catch error");
      dispatch({ type: DELETE_LIST_FAIL, payload: err.res });
    });
};
