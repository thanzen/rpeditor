"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var block_1 = require("../models/block");
var MenuItem_1 = require("./MenuItem");
var amazeui_react_1 = require('amazeui-react');
var actions_1 = require('../actions');
var topbarStyle = {
    textAlign: "center",
    background: "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.2) 25%, rgba(255, 255, 255, 0.2) 75%, rgba(255, 255, 255, 0) 100%)",
    width: "100%",
    boxShadow: " 0 0 25px rgba(0, 0, 0, 0.1), inset 0 0 1px rgba(255, 255, 255, 0.6)",
    color: " rgba(0, 0, 0, 0.5)",
    visibility: "visible"
};
var FixedTopBar = (function (_super) {
    __extends(FixedTopBar, _super);
    function FixedTopBar() {
        var _this = this;
        _super.apply(this, arguments);
        this.onClick = function (callback) {
            if (_this.props.isActive && callback) {
                callback();
            }
        };
    }
    FixedTopBar.prototype.render = function () {
        var _this = this;
        topbarStyle.visibility = this.props.isActive ? "visible" : "hidden";
        var isIconActive = this.props.quillModel ? true : false;
        return (React.createElement(amazeui_react_1.Grid, {style: topbarStyle}, React.createElement(amazeui_react_1.Col, {sm: 12, smOffset: 0, md: 4, mdOffset: 4, lg: 2, lgOffset: 5}, React.createElement(amazeui_react_1.Sticky, {top: 0}, React.createElement(amazeui_react_1.AvgGrid, {sm: 5}, React.createElement("li", null, React.createElement(MenuItem_1.default, {activeIcon: "am-icon-file-o", inactiveIcon: "am-icon-file-o", isActive: true, onClick: function () { return _this.onClick(actions_1.addBlock(new block_1.default(0, ""))); }})), React.createElement("li", null, React.createElement(MenuItem_1.default, {activeIcon: "am-icon-edit", inactiveIcon: "am-icon-edit", isActive: isIconActive, onClick: function () { return _this.onClick(actions_1.openEditor(_this.props.quillModel)); }})), React.createElement("li", null, React.createElement(MenuItem_1.default, {activeIcon: "am-icon-remove", inactiveIcon: "am-icon-remove", isActive: isIconActive, onClick: function () { return _this.onClick(actions_1.deleteBlock(_this.props.quillModel)); }})), React.createElement("li", null, React.createElement(MenuItem_1.default, {activeIcon: "am-icon-arrow-up", inactiveIcon: "am-icon-arrow-up", isActive: this.props.canMoveUp, onClick: function () { return _this.onClick(actions_1.moveBlockUp(_this.props.quillModel)); }})), React.createElement("li", null, React.createElement(MenuItem_1.default, {activeIcon: "am-icon-arrow-down", inactiveIcon: "am-icon-arrow-down", isActive: this.props.canMoveDown, onClick: function () { return _this.onClick(actions_1.moveBlockDown(_this.props.quillModel)); }})))))));
    };
    return FixedTopBar;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FixedTopBar;
