///<reference path="../../libs/typings/react.d.ts" />
///<reference path="../../libs/typings/react-router.d.ts" />
var BlockManager_1 = require("./BlockManager");
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
require('../../node_modules/bootstrap/dist/css/bootstrap.css');
require('../styles/quill.base.css');
require('../styles/quill.snow.css');
require('../styles/editor.css');
var content = document.getElementById('content');
var Routes = (React.createElement(Route, {"handler": BlockManager_1.default}, React.createElement(Route, {"name": "/", "handler": BlockManager_1.default})));
Router.run(Routes, function (Handler) {
    React.render(React.createElement(Handler, null), content);
});
