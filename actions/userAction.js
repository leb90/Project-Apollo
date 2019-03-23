import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE
} from "../constants";
import apiService from "../lib/apiService/apiService";

export const getData = () => {
  return {
    type: FETCHING_DATA
  };
};

export const getDataSuccess = data => {
  return {
    type: FETCHING_DATA_SUCCESS,
    data
  };
};

export const getDataFailure = () => {
  return {
    type: FETCHING_DATA_FAILURE
  };
};

export const usersGet = () => {
  return dispatch => {
    apiService("GET", "/users")
      .then(response => {
        dispatch(getData());
        dispatch(getDataSuccess(response));
      })
      .catch(fail => {
        console.error(fail);
      });
  };
};

export const tokenGet = token => {
  return dispatch => {
    apiService("GET", `/token/${token}`)
      .then(response => {
        dispatch(getDataSuccess(response));
      })
      .catch(fail => {
        console.error(fail);
      });
  };
};

export const loginGet = data => { 
  return dispatch => {
    apiService("POST", "/login", data)
      .then(response => {
        if (response.error === "cantFindUser") {
          dispatch(getDataFailure(response));
        } else {
          dispatch(getDataSuccess([response]));
        }
      })
      .catch(fail => {
        console.log(fail);
        dispatch(getDataFailure(fail));
      });
  };
};
