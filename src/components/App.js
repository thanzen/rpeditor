"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var Block_1 = require("./Block");
var amazeui_react_1 = require('amazeui-react');
var Preview_1 = require('./Preview');
var FixedTopBar_1 = require('./FixedTopBar');
var Editor_1 = require('./Editor');
var actions_1 = require('../actions');
var react_redux_1 = require('react-redux');
var wellStyles = { maxWidth: 400, margin: '0 auto 10px' };
var App = (function (_super) {
    __extends(App, _super);
    function App(props) {
        _super.call(this, props);
        this.handleSelect = function (key) {
            actions_1.selectTab(key);
        };
    }
    App.prototype.render = function () {
        var _a = this.props, blocks = _a.blocks, selectedTab = _a.selectedTab, quillBlock = _a.quillBlock, showBlockEditor = _a.showBlockEditor, quillContent = _a.quillContent, canMoveUp = _a.canMoveUp, canMoveDown = _a.canMoveDown, isTopFixedBarActive = _a.isTopFixedBarActive;
        var blocksList = this.props.blocks.map(function (item) {
            return React.createElement(amazeui_react_1.ListItem, {key: item.id}, React.createElement(Block_1.default, {model: item, quillBlockModel: quillBlock}));
        });
        return (React.createElement("div", {className: "container"}, React.createElement(FixedTopBar_1.default, {activeIcon: 'am-icon-edit', inactiveIcon: 'am-icon-edit', isActive: isTopFixedBarActive, quillModel: quillBlock, canMoveUp: canMoveUp, canMoveDown: canMoveDown}), React.createElement(amazeui_react_1.Grid, null, React.createElement(amazeui_react_1.Col, {sm: 12, smOffset: 0, md: 10, mdOffset: 1, lg: 8, lgOffset: 2}, React.createElement(amazeui_react_1.Tabs, {activeKey: selectedTab, onSelect: this.handleSelect}, React.createElement(amazeui_react_1.Tabs.Item, {eventKey: 1, title: 'Editor'}, React.createElement(amazeui_react_1.List, null, blocksList), React.createElement(Editor_1.default, {theme: 'snow', quillBlock: quillBlock, showBlockEditor: showBlockEditor, quillContent: quillContent})), React.createElement(amazeui_react_1.Tabs.Item, {eventKey: 2, title: 'Preview...'}, React.createElement(Preview_1.default, {blocks: this.props.blocks})))))));
    };
    return App;
}(React.Component));
;
function select(state) {
    return {
        blocks: state.blocks,
        selectedTab: state.selectedTab,
        showBlockEditor: state.showBlockEditor,
        quillContent: state.quillContent,
        quillBlock: state.quillBlock,
        canMoveUp: state.canMoveUp,
        canMoveDown: state.canMoveDown,
        isTopFixedBarActive: state.isTopFixedBarActive
    };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(select)(App);
