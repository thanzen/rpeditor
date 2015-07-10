///<reference path="../../libs/typings/react.d.ts" />
var React = require('react');
var block = require("../models/block");
exports.Block = React.createClass({
    getDefaultProps: function () {
        return { model: new block.Block(0) };
    },
    handleClick: function (content) {
        alert(content);
    },
    render: function () {
        return (React.createElement("li", null, React.createElement("textarea", {"onClick": this.handleClick.bind(this, this.props.model.content)}, this.props.model.content)));
    }
});
