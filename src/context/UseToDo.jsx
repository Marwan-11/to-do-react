import { useContext, createContext, useReducer, useState } from 'react';
import reducer from '../reducer/ToDoReducer';

const TodoContext = createContext({});

const initialTodos = {
  editing: {},
  todos: [
    {
      id: 1,
      title: 'Todo 1',
      complete: false,
    },
    {
      id: 2,
      title: 'Todo 2',
      complete: true,
    },
  ],
};
export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialTodos);

  return (
    <TodoContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  return useContext(TodoContext);
};
