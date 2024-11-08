import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          리액트 공부 가보자 <code>여기는 APP.js이다!</code> 빠르게 꼼꼼하게!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          22400175 김준성
        </a>
        <div>우리 힘내봅시다!</div>
        <div>Let's go!</div>
      </header>
    </div>
  );
}

export default App;
