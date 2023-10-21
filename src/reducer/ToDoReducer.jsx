import * as Actions from './Actions';

export default function reducer(state, action) {
  switch (action.type) {
    case Actions.ADD_TODO: {
      const isFound =
        state.todos.filter((el) => {
          return el.id === action.payload.id;
        }).length > 0;
      if (isFound) {
        return {
          ...state,
          todos: state.todos.map((el) => {
            if (el.id === action.payload.id)
              return { ...el, ...action.payload };
            return el;
          }),
          editing: {},
        };
      }
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    }

    case Actions.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((item) => {
          return item.id !== action.payload;
        }),
      };
    case Actions.CLEAR_TODO:
      return { ...state, todos: [] };
    case Actions.CHANGE_TODO:
      return {
        ...state,
        todos: state.todos.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              complete: !item.complete,
            };
          }
          return item;
        }),
      };
    case Actions.EDIT_TODO:
      return {
        ...state,
        editing: state.todos.filter((e) => {
          return e.id === action.payload;
        })[0],
      };
    default:
      return state;
  }
}
