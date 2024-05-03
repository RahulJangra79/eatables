/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// index.js or App.js
//import './App.css';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/


import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { store } from './components/store1'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)


