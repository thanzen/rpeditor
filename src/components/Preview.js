"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var BlockContent_1 = require("./BlockContent");
var Preview = (function (_super) {
    __extends(Preview, _super);
    function Preview(props) {
        _super.call(this, props);
    }
    Preview.prototype.render = function () {
        var blocks = this.props.blocks.map(function (item) {
            return React.createElement(BlockContent_1.default, {model: item});
        });
        return (React.createElement("div", null, blocks));
    };
    return Preview;
})(React.Component);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Preview;
;
