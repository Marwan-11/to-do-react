import * as Actions from './Actions';

export default function reducer(state, action) {
  switch (action.type) {
    case Actions.ADD_TODO:
      return [...state, action.payload];
    case Actions.DELETE_TODO:
      return state.filter((item) => {
        return item.id !== action.payload;
      });
    case Actions.CLEAR_TODO:
      return [];
    case Actions.CHANGE_TODO:
      return [...action.payload];
    // case Actions.EDIT_TODO:
    //   return [...Actions.payload];
    default:
      return state;
  }
}
