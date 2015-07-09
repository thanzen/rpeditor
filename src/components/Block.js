///<reference path="../../libs/typings/react.d.ts" />
var React = require('react');
var block = require("../models/block");
exports.Block = React.createClass({
    getDefaultProps: function () {
        return { model: new block.Block() };
    },
    render: function () {
        return (React.createElement("li", null, React.createElement("div", null, this.props.model.content)));
    }
});
