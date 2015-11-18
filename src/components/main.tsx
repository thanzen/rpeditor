import  {default as BlockManager} from "./BlockManager";
import * as React  from 'react';
import * as ReactDom from 'react-dom';
import { Router, Route, Link } from 'react-router'

// CSS
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../styles/quill.base.css';
import '../styles/quill.snow.css';
import '../styles/editor.css';

// var content = document.getElementById('content');
//
// var Routes = (
//   <Route handler={BlockManager}>
//     <Route name="/" handler={BlockManager}/>
//   </Route>
// );
//
// Router.run(Routes, function (Handler) {
//   ReactDom.render(<Handler/>, content);
// });
ReactDom.render((
  <Router>
    <Route path="/" component={BlockManager}>
      <Route path="*" component={BlockManager}/>
    </Route>
  </Router>
),  document.getElementById('content'))
