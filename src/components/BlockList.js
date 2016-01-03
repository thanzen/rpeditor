"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var Block_1 = require("./Block");
var amazeui_react_1 = require('amazeui-react');
var BlockList = (function (_super) {
    __extends(BlockList, _super);
    function BlockList(props) {
        _super.call(this, props);
    }
    BlockList.prototype.render = function () {
        var blocks = this.props.blocks.map(function (item) {
            return React.createElement(amazeui_react_1.ListItem, {key: item.id}, " ", React.createElement(Block_1.default, {model: item}), " ");
        });
        return (React.createElement(amazeui_react_1.List, null, blocks));
    };
    return BlockList;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BlockList;
;
