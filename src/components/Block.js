"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var BlockContent_1 = require("./BlockContent");
var actions_1 = require("../actions");
;
var boxStyle = {
    padding: "2px",
    border: "1px solid",
    margin: "0"
};
var selectedStyle = {
    background: "#C4C2B3",
    outline: "0px"
};
var deSelectedStyle = {
    background: "white",
    outline: "0px"
};
var Block = (function (_super) {
    __extends(Block, _super);
    function Block(props) {
        var _this = this;
        _super.call(this, props);
        this.isSelected = function () {
            return _this.props.quillBlockModel && _this.props.model.id == _this.props.quillBlockModel.id;
        };
        this.onMouseOver = function () {
            _this.setState({ isHover: true });
        };
        this.onMouseOut = function () {
            _this.setState({ isHover: false });
        };
        this.state = { isHover: false };
    }
    Block.prototype.render = function () {
        var _this = this;
        var selected = this.isSelected();
        var style = selected ? selectedStyle : deSelectedStyle;
        style.outline = this.state.isHover ? "#333 solid 1px" : "0px";
        return (React.createElement("div", {onMouseOver: this.onMouseOver, onMouseOut: this.onMouseOut, style: style, onClick: function () {
            actions_1.setSelectedQuillBlock(selected ? null : _this.props.model);
        }}, React.createElement(BlockContent_1.default, {model: this.props.model, boxStyle: boxStyle})));
    };
    return Block;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Block;
;
