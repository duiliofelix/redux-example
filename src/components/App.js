import { useDispatch, useSelector } from 'react-redux';
import logo from '../images/logo.svg';
import { createDarkModeToggle } from '../state/actions/theme';
import { darkModeSelector } from '../state/selectors/theme';
import './App.css';

function App() {
  const darkMode = useSelector(darkModeSelector);
  const dispatch = useDispatch();

  const usaAcao = () => dispatch(createDarkModeToggle());

  return (
    <div className="App">
      <button onClick={usaAcao}>Teste</button>

      {darkMode && <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>}
    </div>
  );
}

export default App;
