"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var actions_1 = require('../actions');
var Block = (function (_super) {
    __extends(Block, _super);
    function Block() {
        _super.apply(this, arguments);
    }
    Block.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null, React.createElement("a", null, React.createElement("i", {className: "am-icon-pencil am-icon-fw", onClick: function () { actions_1.openEditor(_this.props.model); }})), React.createElement("a", null, React.createElement("i", {className: "am-icon-minus am-icon-fw", onClick: function () { actions_1.deleteBlock(_this.props.model); }}))));
    };
    return Block;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Block;
;
