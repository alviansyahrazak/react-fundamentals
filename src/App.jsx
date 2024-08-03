import './App.css';
import { GlobalContext } from './context';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

function App() {
  const user = {
    username: 'Alvi',
  };
  return (
    <>
      <GlobalContext.Provider value={user}>
        <RouterProvider router={router} />
      </GlobalContext.Provider>
    </>
  );
}
export default App;
