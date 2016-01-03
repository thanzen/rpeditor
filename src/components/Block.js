"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var BlockContent_1 = require("./BlockContent");
var BlockFooter_1 = require("./BlockFooter");
var boxStyle = {
    padding: "2px",
    border: "1px solid blue",
    margin: "0"
};
var Block = (function (_super) {
    __extends(Block, _super);
    function Block() {
        _super.apply(this, arguments);
    }
    Block.prototype.render = function () {
        return (React.createElement("div", null, React.createElement(BlockContent_1.default, {model: this.props.model, boxStyle: boxStyle}), React.createElement(BlockFooter_1.default, {model: this.props.model})));
    };
    return Block;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Block;
;
