import List from './components/List';
import Form from './components/Form';
import { TodoProvider } from './context/UseToDo';
function App() {
  return (
    <TodoProvider>
      <div className=" bg-gray-100 min-h-screen grid">
        <div className=" w-9/12 mx-auto my-32 bg-white pt-14 pb-14 rounded-2xl shadow-2xl ">
          <Form />
          <List />
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
