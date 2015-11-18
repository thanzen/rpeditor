var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var react_bootstrap_1 = require('react-bootstrap');
var dispatcher_1 = require("../dispatcher");
var eventType_1 = require("../eventType");
var boxStyle = {
    padding: "5px",
    border: "3px solid gray",
    margin: "0"
};
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
        return (React.createElement(react_bootstrap_1.ListGroupItem, null, React.createElement("div", {dangerouslySetInnerHTML: { __html: this.props.model.content }, style: boxStyle}), React.createElement("button", {type: "button", className: "btn btn-default  btn-xs", onClick: this.handleAddBlock.bind(this, this.props.model)}, React.createElement("span", {className: "glyphicon glyphicon-pencil", "aria-hidden": "true"})), React.createElement("button", {type: "button", className: "btn btn-default  btn-xs", onClick: this.handleRemoveBlock.bind(this, this.props.model)}, React.createElement("span", {className: "glyphicon glyphicon-remove", "aria-hidden": "true"}))));
    };
    return Block;
})(React.Component);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Block;
;
