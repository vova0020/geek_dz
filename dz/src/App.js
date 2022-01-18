import logo from './logo.svg';
import './App.css';
import {Message} from "./components/Message/Message";


const text = 'Hello!'


function App() {
  return (
    <div className="App">
        <h1>Lesson1</h1>
        <Message text={text}/>
    </div>
  );
}

export default App;
