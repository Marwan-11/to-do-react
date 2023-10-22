import { useTodoContext } from '../context/UseToDo';
import { useEffect, useState } from 'react';
const Form = () => {
  const {
    state: { editing },
    addTodo,
  } = useTodoContext();

  const [error, setError] = useState(false);
  const [value, setValue] = useState('');

  useEffect(() => {
    if (editing && editing?.id) {
      setValue(editing.title);
    }
  }, [editing]);

  const handleClick = (e) => {
    e.preventDefault();
    if (value === '') {
      setError(true);
      return;
    }
    setError(false);
    if (editing && editing?.id) {
      addTodo({ ...editing, title: value });
      setValue('');
      return;
    }

    const id = new Date().getTime().toString();

    const newToDo = { id, title: value, complete: false };

    addTodo(newToDo);

    setValue('');
  };

  return (
    <form>
      <h1 className=" my-auto mx-4 text-center text-cyan-900 text-5xl font-extrabold pb-20  font-serif">
        ToDo List
      </h1>

      <div className=" flex justify-center w-8/12 mx-auto">
        <div className=" w-11/12">
          <input
            className=" font-bold text-2xl h-12 rounded-l-xl focus:ring-1 focus:ring-blue-700 focus:outline-none  shadow-sm bg-gray-200  w-full px-6 py-2 mb-5"
            type="text"
            placeholder="e.g. Do Exercise"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          {error && (
            <p className="my-auto py-2 mx-4 text-center text-xl  font-serif bg-red-300 rounded-xl w-full h-fit">
              Please Enter A Value
            </p>
          )}
        </div>

        <div>
          <button
            onClick={handleClick}
            type="submit"
            className=" w-fit h-12 pb-2 pt-2 pr-6 pl-5   bg-blue-600 text-white font-bold text-lg hover:bg-blue-800 rounded-r-xl"
          >
            {editing && editing?.id ? 'Update' : 'Add'}
          </button>
        </div>
      </div>
    </form>
  );
};
export default Form;
