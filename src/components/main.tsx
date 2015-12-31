import  {default as BlockManager} from "./App";
import * as React  from 'react';
import * as ReactDom from 'react-dom';
import { Router, Route, Link } from 'react-router';
import { Store, createStore} from 'redux';
import {Provider} from 'react-redux';
import { default as reducers } from '../reducers';
import {default as context} from '../context';
import {default as Block} from '../models/block';
// CSS
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../styles/quill.base.css';
import '../styles/quill.snow.css';
import '../styles/editor.css';

const store: Store = createStore(reducers);
context.store = store;

ReactDom.render((
    <Provider store={store}>
      <Router>
        <Route path="/" component={BlockManager}>
          <Route path="*" component={BlockManager}/>
        </Route>
      </Router>
   </Provider>
),  document.getElementById('container'))
