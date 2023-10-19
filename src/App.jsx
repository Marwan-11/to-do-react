import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-slate-900 h-screen">
        <h1 className="text-3xl text-red-500">Hello</h1>
      </div>
    </>
  );
}

export default App;
