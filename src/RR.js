import React from 'react';
import logo from './logo.svg';
// import './App.css';
import { createStore } from 'redux';

/** 
  下面是一個簡單的 reducers ，主要功能是針對傳進來的 action type 判斷並回傳新的 state
  reducer 規格：(state, action) => newState 
  一般而言 state 可以是 primitive、array 或 object 甚至是 ImmutableJS Data。但要留意的是不能修改到原來的 state ，
  回傳的是新的 state。由於使用在 Redux 中使用 ImmutableJS 有許多好處，所以我們的範例 App 也會使用 ImmutableJS 
*/
function counter(state = {"A":1,"B":2}, action) {
        switch (action.type) {
                case 'INCREMENT':
                        return state.A + 1;
                case 'OMG':
                        return state.B + 999;
                case 'DECREMENT':
                        return state.A - 1;
                default:
                        return state;
        }
}
// function counter(state = 0, action) {
//         switch (action.type) {
//                 case 'INCREMENT':
//                         return state + 1;
//                 case 'OMG':
//                         return state + 999;
//                 case 'DECREMENT':
//                         return state - 1;
//                 default:
//                         return state;
//         }
// }

// 創建 Redux store 去存放 App 的所有 state
// store 的可用 API { subscribe, dispatch, getState } 
let store = createStore(counter);

// 可以使用 subscribe() 來訂閱 state 是否更新。但實務通常會使用 react-redux 來串連 React 和 Redux
store.subscribe(() =>
        console.log(store.getState())
);

// 若想改變 state ，一律發 action
store.dispatch({ type: 'INCREMENT' });
// 1
store.dispatch({ type: 'INCREMENT' });
// 2
store.dispatch({ type: 'DECREMENT' });
// 1
store.dispatch({ type: 'OMG' });
// 1
export default function RT() {
        return (
                <div className="App">
                        <header className="App-header">
                                <img src={logo} className="App-logo" alt="logo" />
                                <p>
                                        RTRTRTRTRTEdit <code>src/App.js</code> and save to reload.
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


