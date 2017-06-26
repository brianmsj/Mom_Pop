import React from 'react';
import ReactDOM from 'react-dom';
import { Route, IndexRoute, BrowserRouter, Switch } from 'react-router-dom';
import App from './components/app';
import Header from './components/header'
import {createStore, applyMiddleware} from 'redux';
import './index.css';
import './grid.css';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import {Provider} from 'react-redux';



const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));


ReactDOM.render(
<Provider store={store}>
  <BrowserRouter>
  <div>
   <Header />
   <Switch>
    <Route path="/" component={App} />
   </Switch>
   </div>
  </BrowserRouter>
 </Provider >,
  document.getElementById('root')
);
