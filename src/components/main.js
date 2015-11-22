var BlockManager_1 = require("./BlockManager");
var React = require('react');
var ReactDom = require('react-dom');
var react_router_1 = require('react-router');
require('../../node_modules/bootstrap/dist/css/bootstrap.css');
require('../styles/quill.base.css');
require('../styles/quill.snow.css');
require('../styles/editor.css');
ReactDom.render((React.createElement(react_router_1.Router, null, React.createElement(react_router_1.Route, {"path": "/", "component": BlockManager_1.default}, React.createElement(react_router_1.Route, {"path": "*", "component": BlockManager_1.default})))), document.getElementById('content'));
