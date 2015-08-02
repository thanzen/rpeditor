///<reference path="../../libs/typings/react.d.ts" />
///<reference path="../../libs/typings/react-router.d.ts" />

import  {default as BlockManager} from "./BlockManager";
import * as React  from 'react';
import * as Router  from 'react-router';
var Route = Router.Route;

// CSS
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../styles/quill.base.css';
import '../styles/quill.snow.css';
import '../styles/editor.css';

var content = document.getElementById('content');

var Routes = (
  <Route handler={BlockManager}>
    <Route name="/" handler={BlockManager}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
