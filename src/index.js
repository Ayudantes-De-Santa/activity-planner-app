import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { render } from 'react-dom'
import { createStore} from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers/activity'
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)


// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
