import React from 'react';
import logo from './logo.svg';
import './App.css';
import RT from './RR';
// import Main from './components/Main.js'
// import Book from './components/Main.js'
import BookToDoList from './components/BookToDoList'
import { Button,List, WhiteSpace, WingBlank } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less'
// import Counter from './examples/app';
import Counter from './examples/app';


function App() {
  return (
    <div className="App">
      <BookToDoList/>
      <Counter />

  

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
           

      <Button>default</Button><WhiteSpace />
    <Button disabled>default disabled</Button><WhiteSpace />

  <List style={{ margin: '5px 0', backgroundColor: 'white' }}>
    <List.Item
      extra={<Button type="ghost" size="small" inline>small</Button>}
      multipleLine
    >
      Regional manager
      <List.Item.Brief>
        Can be collected, refund, discount management, view data and other operations
      </List.Item.Brief>
    </List.Item>
    <List.Item
      extra={<Button type="primary" size="small" inline>small</Button>}
      multipleLine
    >
      Regional manager
      <List.Item.Brief>
        Can be collected, refund, discount management, view data and other operations
      </List.Item.Brief>
    </List.Item>
  </List>

    </div>
  );
}

export default App;
