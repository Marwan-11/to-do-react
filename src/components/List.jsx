import { useTodoContext } from '../context/UseToDo';
import { FaEdit, FaUndoAlt } from 'react-icons/fa';
import { MdDelete, MdDone } from 'react-icons/md';

import * as Actions from '../reducer/Actions';

const List = () => {
  const {
    state: { todos },
    dispatch,
    clearTodos,
    EditTodo,
    changeTodo,
  } = useTodoContext();

  return (
    <>
      {todos.map((item) => {
        return (
          <div
            key={item.id}
            className=" flex flex-wrap justify-center w-8/12 mx-auto  rounded-lg my-10 md:max-xl bg-slate-50 md:bg-white "
          >
            <p
              className={`text-2xl font-bold inline w-fit xl:w-3/5 my-auto font-serif ml-4 uppercase rounded-2xl px-5 py-4 ${
                item.complete ? ' line-through bg-green-200' : ''
              }`}
            >
              {item.title}
            </p>
            <div>
              <button
                type="button"
                className="  p-2  mx-2 my-2  "
                onClick={() => changeTodo(item.id)}
              >
                {!item.complete ? (
                  <MdDone className=" text-2xl text-green-500 hover:text-green-700" />
                ) : (
                  <FaUndoAlt className=" text-2xl text-yellow-500 hover:text-yellow-700" />
                )}
              </button>
              <button type="button" className="  p-2  mx-2 my-2  ">
                <FaEdit
                  onClick={() => EditTodo(item.id)}
                  className=" text-2xl text-sky-500 hover:text-sky-700"
                />
              </button>
              <button type="button" className="  p-2  mx-2 my-2  ">
                <MdDelete
                  onClick={() =>
                    dispatch({ type: Actions.DELETE_TODO, payload: item.id })
                  }
                  className=" text-2xl  text-red-500 hover:text-red-700"
                />
              </button>
            </div>
          </div>
        );
      })}
      <div className=" flex justify-center">
        {todos.length < 1 || (
          <button
            onClick={clearTodos}
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
