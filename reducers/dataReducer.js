import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE,
  FETCHING_DATA_MID,
  FETCHING_DATA_WHEATER,
  INDEX_SELECT,
  FETCHING_DATA_HOME
} from "../constants";

const initialState = {
  data: [],
  time: [],
  dataWheater: {},
  index: {},
  home: [],
  isFetching: false,
  error: false
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DATA:
      return {
        ...state,
        data: [],
        time: [],
        isFetching: true
      };
    case FETCHING_DATA_SUCCESS:
      return {
        ...state,
        data: action.data,
        time: [],
        isFetching: false
      };
    case FETCHING_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      };
    case FETCHING_DATA_MID:
      return {
        ...state,
        time: action.time,
        data: [],
        isFetching: true
      };
    case FETCHING_DATA_WHEATER:
      return {
        ...state,
        data: [],
        dataWheater: action.dataWheater,
        isFetching: true
      };
    case FETCHING_DATA_HOME:
      return {
        ...state,
        home: action.home,
        isFetching: false
      };
    case INDEX_SELECT:
      return {
        ...state,
        index: { [action.index.type]: action.index.index }
      };
    default:
      return state;
  }
};
export default dataReducer;
