import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './Redux/store'
import { Provider } from 'react-redux'
import { resetMoneyOnRouletteTable } from "./Components/Roulette/Calculator"
import { resetMoneyOnBlackJackTable } from "./Components/BlackJack/Calculator"

resetMoneyOnRouletteTable()
resetMoneyOnBlackJackTable()
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
