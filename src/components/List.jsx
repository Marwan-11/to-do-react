import { useTodoContext } from '../context/UseToDo';
import { FaEdit, FaUndoAlt } from 'react-icons/fa';
import { MdDelete, MdDone } from 'react-icons/md';

import * as Actions from '../reducer/Actions';

const List = () => {
  const {
    state: { todos },
    dispatch,
  } = useTodoContext();

  const changeTodo = (e) => {
    const newState = todos.map((item) => {
      if (item.id === e) {
        return {
          ...item,
          complete: !item.complete,
        };
      }
      return item;
    });
    dispatch({ type: Actions.CHANGE_TODO, payload: newState });
  };

  const EditTodo = (t) => {
    dispatch({
      type: Actions.EDIT_TODO,
      payload: t,
    });
  };
  return (
    <>
      {todos.map((item) => {
        return (
          <div
            key={item.id}
            className=" flex justify-center w-8/12 mx-auto  rounded-lg my-10 "
          >
            {item.complete ? (
              <p className=" text-2xl font-bold inline w-3/4 my-auto font-serif ml-4 line-through uppercase  bg-slate-200 rounded-2xl px-5 py-4  ">
                {item.title}
              </p>
            ) : (
              <p className=" text-2xl font-bold inline w-3/4 my-auto font-serif ml-4 uppercase rounded-2xl px-5 py-4 ">
                {item.title}
              </p>
            )}

            <div>
              {!item.complete ? (
                <button
                  type="button"
                  className="  p-2  mx-2 my-2  "
                  onClick={() => changeTodo(item.id)}
                >
                  <MdDone className=" text-4xl text-green-500 hover:text-green-700" />
                </button>
              ) : (
                <button
                  type="button"
                  className="  p-2  mx-2 my-2  "
                  onClick={() => changeTodo(item.id)}
                >
                  <FaUndoAlt className=" text-2xl text-yellow-500 hover:text-yellow-700" />
                </button>
              )}
              <button type="button" className="  p-2  mx-2 my-2  ">
                <FaEdit
                  onClick={() => EditTodo(item.id)}
                  className=" text-3xl text-sky-500 hover:text-sky-700"
                />
              </button>
              <button type="button" className="  p-2  mx-2 my-2  ">
                <MdDelete
                  onClick={() =>
                    dispatch({ type: Actions.DELETE_TODO, payload: item.id })
                  }
                  className=" text-3xl  text-red-500 hover:text-red-700"
                />
              </button>
            </div>
          </div>
        );
      })}
      <div className=" flex justify-center">
        {todos.length < 1 || (
          <button
            onClick={() => {
              dispatch({ type: Actions.CLEAR_TODO });
            }}
            type="button"
            className=" w-fit bg-red-500 rounded-lg text-white font-bold p-2 text-lg mx-4 my-2 hover:bg-red-700 "
          >
            Clear All
          </button>
        )}
      </div>
    </>
  );
};

export default List;
