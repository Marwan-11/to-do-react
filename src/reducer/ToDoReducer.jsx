import * as Actions from './Actions';

export default function reducer(state, action) {
  switch (action.type) {
    case Actions.ADD_TODO:
      return {
        ...state,
        todos: state.todos.map((el) => {
          if (el.id === action.payload.id) return { ...el, ...action.payload };
          return el;
        }),
      };
    case Actions.DELETE_TODO:
      return state.filter((item) => {
        return item.id !== action.payload;
      });
    case Actions.CLEAR_TODO:
      return [];
    case Actions.CHANGE_TODO:
      return [...action.payload];
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
