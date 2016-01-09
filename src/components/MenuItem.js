"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var LinkTooltip_1 = require('./LinkTooltip');
var MenuItem = (function (_super) {
    __extends(MenuItem, _super);
    function MenuItem() {
        var _this = this;
        _super.apply(this, arguments);
        this.onClick = function () {
            if (_this.props.isActive) {
                _this.props.onClick(_this.props.model);
            }
        };
    }
    MenuItem.prototype.render = function () {
        var icon = this.props.isActive ? this.props.activeIcon : this.props.inactiveIcon;
        var content = React.createElement("i", {className: icon + " am-icon-fw", onClick: this.onClick});
        if (this.props.isActive) {
            content = (React.createElement(LinkTooltip_1.default, {tooltip: this.props.tooltip}, " ", content));
        }
        return (content);
    };
    return MenuItem;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MenuItem;
;
