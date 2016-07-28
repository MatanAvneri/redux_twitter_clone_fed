import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { createStore } from "redux";
import AppReducer from "./AppReducer";

let store = createStore(AppReducer);

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
);
