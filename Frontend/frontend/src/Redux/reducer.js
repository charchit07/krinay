import {
  Add_Todo,
  Delete_Todo,
  Get_Todo,
  Update_Todo,
  error,
  loading,
} from "./actionType";

const initalsate = {
  loading: false,
  error: false,
  todos: [],
};

export default function reducer(state = initalsate, action) {
  switch (action.type) {
    case loading: {
      return {
        ...state,
        loading: true,
      };
    }
    case error: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case Get_Todo: {
      return {
        ...state,
        loading: false,
        todos: action.payload,
      };
    }
    case Add_Todo: {
      return {
        ...state,
        loading: false,
        todos: [...state.todos, action.payload],
      };
    }
    case Update_Todo: {
      return {
        ...state,
        loading: false,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...action.payload,
            };
          }
          return todo;
        }),
      };
    }
    case Delete_Todo: {
      return {
        ...state,
        loading: false,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    }

    default: {
      return state;
    }
  }
}
