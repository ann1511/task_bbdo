import React from 'react';
import { render } from 'react-dom'
import { createStore } from 'redux';
import { rootReducer } from './reducers/index'
import App from './components/App';
import { Provider } from 'react-redux'


let store = createStore(
    rootReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )