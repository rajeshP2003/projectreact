import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message';
import Rev from './components/Rev.js';

function App() {
  return (
    <div className="App">
      <Message ></Message>
      <Rev >
        <p>children.. p-tag </p>
        <h2>children...h2 tag</h2>
      </Rev>
      {/* <Greet name = "Bruce" heroName="Batman">
        <p>I am BATMAN!</p>
      </Greet>
      <Greet name = "Clark" heroName="Man of Steel">
        <button>Action</button>
      </Greet>
      <Greet name = "Diana" heroName="Wonder Woman"></Greet>
      <Welcome name = "Bruce" heroName="Batman">
      <p>I am BATMAN!</p>
      </Welcome>
      <Welcome name = "Clark" heroName="Man of Steel">
      <button>Action</button>
      </Welcome>
      <Welcome name = "Diana" heroName="Wonder Woman"></Welcome>
      <Hello></Hello> */}
    </div>
  );
}

export default App;
