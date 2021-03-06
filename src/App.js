import React from 'react';
import './App.css';
import Main from './component/MainComponent';
import { Provider } from 'react-redux';
import {ConfigureStore} from './redux/configureStore';
import { BrowserRouter } from 'react-router-dom';

const store = ConfigureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
