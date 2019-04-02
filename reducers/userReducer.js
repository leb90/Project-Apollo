import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE,
  USER_ADD_COLOR
} from "../constants";

const initialState = {
  data: [],
  colors: [],
  isFetching: false,
  error: false
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DATA:
      return {
        ...state,
        data: [],
        isFetching: true
      };
    case FETCHING_DATA_SUCCESS:
      return {
        ...state,
        data: action.data,
        isFetching: false
      };
    case FETCHING_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      };
    case USER_ADD_COLOR:
        return {
          ...state,
          colors: [...state.colors , action.data]
      }
    default:
      return state;
  }
};
export default userReducer;
