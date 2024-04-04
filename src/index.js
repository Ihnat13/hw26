import ReactDOM from 'react-dom/client';
import React from 'react';
import './App.css';
import store from './Components/store';
import App from './App.jsx';
import { Provider, connect } from 'react-redux';

const root = document.getElementById('root');
const rootContainer = ReactDOM.createRoot(root)

rootContainer.render(
  <Provider store={store}>
    <App />
  </Provider>
)




