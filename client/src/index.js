import React from 'react';
import ReactDOM from 'react-dom';
import { Route, IndexRoute, BrowserRouter, Switch } from 'react-router-dom';
import App from './components/app';
import Header from './components/header'
import SingleJobPage from './components/single-job-page'
import {createStore, applyMiddleware} from 'redux';
import './index.css';
import './grid.css';
import Profile from './components/profile'
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
    <Route path="/singlepost/:id" component={SingleJobPage} />
    <Route path="/profile" component={Profile}/>
    <Route path="/" component={App} />
   </Switch>
   </div>
  </BrowserRouter>
 </Provider >,
  document.getElementById('root')
);
