'use strict';

var RpeditorApp = require('./BlockManager').BlockManager;
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
// CSS
require('../../node_modules/bootstrap/dist/css/bootstrap.css');
require('../styles/quill.base.css');
require('../styles/quill.snow.css');
var content = document.getElementById('content');

var Routes = (
  <Route handler={RpeditorApp}>
    <Route name="/" handler={RpeditorApp}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
