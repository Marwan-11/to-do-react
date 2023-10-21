import { useTodoContext } from '../context/UseToDo';
import * as Actions from '../reducer/Actions';

const Form = () => {
  const { dispatch, value, setValue, edit, setEdit, bag, state, id, setId } =
    useTodoContext();
  const handleClick = (e) => {
    e.preventDefault();
    const id = new Date().getTime().toString();
    // setId(id + 1);
    const newToDo = { id, title: value, complete: false };
    dispatch({ type: Actions.ADD_TODO, payload: newToDo });
    setValue('');
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    setEdit(!edit);
    const newTodo = state.map((item) => {
      if (item.title === value) {
        return {
          ...item,
          title: e,
        };
      }
      return item;
    });
    dispatch({ type: Actions.EDIT_TODO, payload: newTodo });
  };

  return (
    <form>
      <h1 className=" my-auto mx-4 text-center text-cyan-900 text-5xl font-extrabold pb-20  font-serif">
        ToDo List
      </h1>

      <div className=" flex justify-center w-8/12 mx-auto">
        <div className=" w-11/12">
          <input
            className=" font-bold text-2xl h-12 rounded-l-xl focus:ring-1 focus:ring-blue-700 focus:outline-none  shadow-sm bg-gray-50  w-full px-6 py-2 mb-5"
            type="text"
            placeholder="e.g. Do Exercise"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
        </div>

        <div>
          {edit ? (
            <button
              onClick={handleClick}
              type="submit"
              className=" w-fit h-12 pb-2 pt-2 pr-6 pl-5   bg-blue-600 text-white font-bold text-lg hover:bg-blue-800 rounded-r-xl"
            >
              Add
            </button>
          ) : (
            <button
              onClick={() => handleConfirm}
              type="submit"
              className=" w-fit h-12 pb-2 pt-2 pr-6 pl-5   bg-blue-600 text-white font-bold text-lg hover:bg-blue-800 rounded-r-xl"
            >
              confirm
            </button>
          )}
        </div>
      </div>
    </form>
  );
};
export default Form;
