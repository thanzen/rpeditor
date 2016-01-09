"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var amazeui_react_1 = require('amazeui-react');
var LinkTooltip = (function (_super) {
    __extends(LinkTooltip, _super);
    function LinkTooltip() {
        _super.apply(this, arguments);
    }
    LinkTooltip.prototype.render = function () {
        var tooltip = React.createElement(amazeui_react_1.Popover, {amSize: "sm"}, this.props.tooltip);
        return (React.createElement(amazeui_react_1.PopoverTrigger, {placement: "bottom", popover: tooltip, delayOpen: 300, delayClose: 150}, React.createElement("a", {href: this.props.href}, this.props.children)));
    };
    return LinkTooltip;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LinkTooltip;
