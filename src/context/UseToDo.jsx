import {
  useContext,
  createContext,
  useReducer,
  useState,
  useEffect,
} from 'react';
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
  const EditTodo = (t) => {
    dispatch({
      type: Actions.EDIT_TODO,
      payload: t,
    });
  };

  const changeTodo = (id) => {
    dispatch({ type: Actions.CHANGE_TODO, payload: id });
  };

  const [error, setError] = useState(false);
  const [value, setValue] = useState('');

  useEffect(() => {
    if (state.editing && state.editing?.id) {
      setValue(state.editing.title);
    }
  }, [state.editing]);

  // add and confirm
  const handleClick = (e) => {
    e.preventDefault();
    if (value === '') {
      setError(true);
      return;
    }
    setError(false);
    if (state.editing && state.editing?.id) {
      dispatch({
        type: Actions.ADD_TODO,
        payload: { ...state.editing, title: value },
      });
      setValue('');
      return;
    }

    const id = new Date().getTime().toString();
    // setId(id + 1);
    const newToDo = { id, title: value, complete: false };
    dispatch({ type: Actions.ADD_TODO, payload: newToDo });
    setValue('');
  };

  return (
    <TodoContext.Provider
      value={{
        state,
        dispatch,
        clearTodos,
        EditTodo,
        changeTodo,
        setValue,
        value,
        handleClick,
        error,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  return useContext(TodoContext);
};
