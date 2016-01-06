"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var MenuItem_1 = require("./MenuItem");
var amazeui_react_1 = require('amazeui-react');
var TopBar = (function (_super) {
    __extends(TopBar, _super);
    function TopBar() {
        var _this = this;
        _super.apply(this, arguments);
        this.onClick = function (callback) {
            if (_this.props.isActive && callback) {
                callback();
            }
        };
    }
    TopBar.prototype.render = function () {
        var _this = this;
        var icon = this.props.isActive ? this.props.activeIcon : this.props.inactiveIcon;
        var isIconActive = this.props.quillModel ? true : false;
        return (React.createElement(amazeui_react_1.Sticky, {top: 0}, React.createElement("div", null, React.createElement(MenuItem_1.default, {activeIcon: "am-icon-file-o", inactiveIcon: "am-icon-file-o", isActive: true, onClick: function () { return _this.onClick(); }}), React.createElement(MenuItem_1.default, {activeIcon: "am-icon-edit", inactiveIcon: "am-icon-edit", isActive: isIconActive, onClick: function () { return _this.onClick(); }}), React.createElement(MenuItem_1.default, {activeIcon: "am-icon-remove", inactiveIcon: "am-icon-remove", isActive: isIconActive, onClick: function () { return _this.onClick(); }}), React.createElement(MenuItem_1.default, {activeIcon: "am-icon-arrow-up", inactiveIcon: "am-icon-arrow-up", isActive: isIconActive, onClick: function () { return _this.onClick(); }}), React.createElement(MenuItem_1.default, {activeIcon: "am-icon-arrow-down", inactiveIcon: "am-icon-arrow-down", isActive: isIconActive, onClick: function () { return _this.onClick(); }}))));
    };
    return TopBar;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TopBar;
