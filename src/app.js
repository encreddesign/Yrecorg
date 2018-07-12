import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Reducers from './store/dropbox/reducer';
import Login from './containers/Login';

const store = createStore(Reducers, applyMiddleware(thunk));

/**
 * @class App
 */
export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main id="main-layout" className="main-layout">
        <Login />
      </main>
    )
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);