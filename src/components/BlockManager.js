///<reference path="../../libs/typings/react.d.ts" />
var React = require('react');
var Block_ = require("./Block");
var block_ = require("../models/block");
var ListGroup = require('react-bootstrap/lib/ListGroup');
var Ed = require('./Editor');
var disp = require("../dispatcher");
var dispatcher = disp.Dispatcher;
var Editor = Ed.Editor;
var BlockView = Block_.Block;
module.exports = React.createClass({
    getInitialState: function () {
        return ({ value: "", showModal: true });
    },
    getDefaultProps: function () {
        return { blocks: [new block_.Block(0, "this is a test")] };
    },
    handleClick: function (content) {
        this.setState({ showModal: true });
    },
    render: function () {
        var self = this;
        var blocks = this.props.blocks.map(function (item) {
            return React.createElement(BlockView, {"model": item, "onClick": self.handleClick});
        });
        return (React.createElement("div", null, React.createElement(ListGroup, null, blocks), React.createElement(Editor, {"theme": 'snow', "value": this.state.value, "showModal": this.state.showModal})));
    },
    registerEvents: function () {
        var self = this;
        dispatcher.register(function (action) {
        });
    },
});
