"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var dispatcher_1 = require("../dispatcher");
var eventType_1 = require("../eventType");
var Block = (function (_super) {
    __extends(Block, _super);
    function Block() {
        _super.apply(this, arguments);
        this.handleAddBlock = function (model) {
            dispatcher_1.default.dispatch({ type: eventType_1.default.QUILL_OPEN, block: model });
        };
        this.handleRemoveBlock = function (model) {
            dispatcher_1.default.dispatch({ type: eventType_1.default.BLOCK_DELTE, block: model });
        };
    }
    Block.prototype.render = function () {
        return (React.createElement("div", null, React.createElement("button", {type: "button", className: "btn btn-default  btn-xs", onClick: this.handleAddBlock.bind(this, this.props.model)}, React.createElement("span", {className: "glyphicon glyphicon-pencil", "aria-hidden": "true"})), React.createElement("button", {type: "button", className: "btn btn-default  btn-xs", onClick: this.handleRemoveBlock.bind(this, this.props.model)}, React.createElement("span", {className: "glyphicon glyphicon-remove", "aria-hidden": "true"}))));
    };
    return Block;
})(React.Component);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Block;
;
