"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var BlockContent = (function (_super) {
    __extends(BlockContent, _super);
    function BlockContent() {
        _super.apply(this, arguments);
    }
    BlockContent.prototype.render = function () {
        return (React.createElement("div", {dangerouslySetInnerHTML: { __html: this.props.model.content }, style: this.props.boxStyle}));
    };
    return BlockContent;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BlockContent;
;
