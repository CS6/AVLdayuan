import React from 'react';
import logo from './logo.svg';
import './App.css';
import RT from './RR';
// import Main from './components/Main.js'
// import Book from './components/Main.js'
import BookToDoList from './components/BookToDoList'

function App() {
  return (
    <div className="App">
      <BookToDoList/>
      <div style={{
		// backgroundColor: '#FAF',
		borderRadius:22,
		borderColor:'#234567',
		outlineColor:'#FF4567',
		borderBlockColor:'#234567',
		color :'#000',
    height:20,
    borderWidth: 5,
    border:'5px',
    borderBottom: "3px solid rgb(212, 212, 212)",
    borderTop: "3px solid #234567",

    fontSize: 16,
        width:100,
    borderBlockEndColor:"#454542",
	}}>s</div>
      <RT/>
      
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
    </div>
  );
}

export default App;
