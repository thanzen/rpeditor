///<reference path="../../libs/typings/react.d.ts" />
///<reference path="../../libs/typings/react-quill.d.ts" />
var React = require('react');
var ReactQuill = require('react-quill');
var BlockManager_ = require("./BlockManager");
var BlockManagerView = BlockManager_.BlockManager;
module.exports = React.createClass({
    getDefaultProps: function () {
        return { theme: "snow" };
    },
    getInitialState: function () {
        return { value: "" };
    },
    render: function () {
        return (React.createElement("div", null, React.createElement(ReactQuill, {"theme": this.props.theme, "value": this.state.value}), React.createElement(BlockManagerView, null)));
    }
});
