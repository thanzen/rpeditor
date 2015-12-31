"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var Block_1 = require("./Block");
var react_bootstrap_1 = require('react-bootstrap');
var BlockList = (function (_super) {
    __extends(BlockList, _super);
    function BlockList(props) {
        _super.call(this, props);
    }
    BlockList.prototype.render = function () {
        var blocks = this.props.blocks.map(function (item) {
            return React.createElement(react_bootstrap_1.ListGroupItem, {key: item.id}, " ", React.createElement(Block_1.default, {model: item}), " ");
        });
        return (React.createElement(react_bootstrap_1.ListGroup, null, blocks));
    };
    return BlockList;
})(React.Component);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BlockList;
;
