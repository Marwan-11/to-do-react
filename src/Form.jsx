const Form = () => {
  return (
    <form>
      <h1 className=" my-auto mx-4 text-center text-cyan-900 text-5xl font-extrabold pb-20  font-serif">
        To Do List
      </h1>

      <div className=" flex justify-center w-8/12 mx-auto">
        <div className=" w-11/12">
          <input
            className=" h-12 rounded-l-xl focus:ring-1 focus:ring-blue-700 focus:outline-none  shadow-sm bg-gray-50  w-full px-6 py-2 mb-5"
            type="text"
            placeholder="e.g. Do Exercise"
          />
        </div>

        <div>
          <button
            type="submit"
            className=" w-fit h-12 pb-2 pt-2 pr-6 pl-5   bg-blue-600 text-white font-bold text-lg hover:bg-blue-800 rounded-r-xl"
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};
export default Form;
