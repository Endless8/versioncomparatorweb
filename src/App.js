import './App.css';
import Form from './components/Form';

function App() {
  return (
    /*<div className="App">
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
      </header>
    </div>*/

    <div className="container" onclick="onclick">
      <div className="top"></div>
      <div className="bottom"></div>
      <div className="center">
        <br />
        <h2>Version Comparator App</h2>
        <Form></Form>
        <h2>&nbsp;</h2>
      </div>
    </div>
  );
}

export default App;
