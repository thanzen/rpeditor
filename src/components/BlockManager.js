///<reference path="../../libs/typings/react.d.ts" />
var React = require('react');
var Block_ = require("./Block");
var block_ = require("../models/block");
var BlockView = Block_.Block;
function getBlockItem(block) {
    return React.createElement(BlockView, {"model": block});
}
exports.BlockManager = React.createClass({
    getDefaultProps: function () {
        return { blocks: [new block_.Block(), new block_.Block()] };
    },
    getInitialState: function () {
        return { value: "" };
    },
    render: function () {
        var blocks = this.props.blocks.map(getBlockItem);
        return (React.createElement("ul", null, blocks));
    }
});
