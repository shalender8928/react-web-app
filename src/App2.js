import logo from './logo.svg';
import './App.css';
import Gallery from './Gallery';
import { Bio } from './bio'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
        <Bio />
        <Gallery />
      </header>
    </div>

  );
}

export default App;
