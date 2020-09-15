import {
  FETCH_LISTS_START,
  FETCH_LISTS_SUCCESS,
  FETCH_LISTS_FAIL,
  POST_LIST_FAIL,
  POSTED_LIST,
  DELETE_LIST,
  DELETE_LIST_FAIL,
} from "../actions";

const initialState = {
  todoList: [],
  fetchingList: false,
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LISTS_START:
      return {
        ...state,
        fetchingList: true,
      };
    case FETCH_LISTS_SUCCESS:
      return {
        ...state,
        todoList: action.payload.data,
        fetchingList: false,
        error: "",
      };
    case FETCH_LISTS_FAIL:
      return {
        ...state,
        fetchingList: false,
        error: action.payload,
      };
    case POSTED_LIST:
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case POST_LIST_FAIL:
      return {
        ...state,
        todoList: false,
        error: action.payload,
      };
    case DELETE_LIST:
      const filter = state.todoList.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        todoList: filter,
      };
    case DELETE_LIST_FAIL:
      return {
        ...state,
        todoList: false,
        error: action.payload,
      };

    //make sure the default is inside the switch {}
    default:
      return state;
  }
};

export default reducer;
