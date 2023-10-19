import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const List = () => {
  return (
    <>
      <div className=" flex justify-center w-8/12 mx-auto  rounded-lg my-10 ">
        <p className=" text-2xl font-bold inline w-3/4 my-auto font-serif ml-4 ">
          item
        </p>
        <div>
          <button type="button" className="  p-2  mx-2 my-2  ">
            <FaEdit className=" text-3xl text-green-500 hover:text-green-700" />
          </button>
          <button type="button" className="  p-2  mx-2 my-2  ">
            <MdDelete className=" text-3xl  text-red-500 hover:text-red-700" />
          </button>
        </div>
      </div>
      <div className=" flex justify-center">
        <button
          type="button"
          className=" w-fit bg-red-500 rounded-lg text-white font-bold p-2 text-lg mx-4 my-2 hover:bg-red-700 "
        >
          Clear All
        </button>
      </div>
    </>
  );
};
export default List;
