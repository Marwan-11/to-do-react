import { useContext, createContext, useReducer, useEffect } from 'react';
import reducer from '../reducer/ToDoReducer';
import * as Actions from '../reducer/Actions';

const TodoContext = createContext({});

const initialTodos = {
  editing: {},
  todos: [
    // {
    //   id: 1,
    //   title: 'Todo 1',
    //   complete: false,
    // },
    // {
    //   id: 2,
    //   title: 'Todo 2',
    //   complete: true,
    // },
  ],
};

export const TodoProvider = ({ children }) => {
  // get from local storage
  const getTodos = JSON.parse(localStorage.getItem('list'));

  const [state, dispatch] = useReducer(reducer, getTodos || initialTodos);
  const clearTodos = () => dispatch({ type: Actions.CLEAR_TODO });

  //  local storage

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(state));
  }, [state]);

  // edit todo
  const EditTodo = (id) => {
    dispatch({
      type: Actions.EDIT_TODO,
      payload: id,
    });
  };

  const changeTodo = (id) => {
    dispatch({ type: Actions.CHANGE_TODO, payload: id });
  };

  const addTodo = (newToDo) => {
    dispatch({ type: Actions.ADD_TODO, payload: newToDo });
  };

  return (
    <TodoContext.Provider
      value={{
        state,
        dispatch,
        clearTodos,
        EditTodo,
        changeTodo,
        addTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  return useContext(TodoContext);
};
