import React from 'react';
import logo from './logo.svg';
import './App.css';
import styles from './App.less';
import request from './utlis/axios';
function App() {
  const url = `http://localhost:3000/top/playlist/highquality?before=1503639064232&limit=3`
  request.get(url).then((res: any) => {
    console.log(res)
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h5 className={styles['color']}>hhhhhh</h5>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
