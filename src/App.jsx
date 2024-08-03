import './App.css';
import { Homepage } from './pages/index';
import { GlobalContext } from './context';

function App() {
  const user = {
    username: 'Alvi',
  };
  return (
    <>
      <GlobalContext.Provider value={user}>
        <Homepage />
      </GlobalContext.Provider>
    </>
  );
}
export default App;
