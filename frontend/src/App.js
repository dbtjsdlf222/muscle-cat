import logo from './logo.svg';
import './App.css';
import {useEffect} from "react";

function App() {


  useEffect(()=>{
    fetch('http://localhost/login?id=1&pw=1')
        .then(response => console.log(response))
        .then(data => console.log(data));
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>

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
    </div>
  );
}

export default App;
