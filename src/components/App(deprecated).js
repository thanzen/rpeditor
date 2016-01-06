"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var Block_1 = require("./Block");
var block_1 = require("../models/block");
var react_bootstrap_1 = require('react-bootstrap');
var Preview_1 = require('./Preview');
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
        var _a = this.props, blocks = _a.blocks, selectedTab = _a.selectedTab, quillBlock = _a.quillBlock, showBlockEditor = _a.showBlockEditor, quillContent = _a.quillContent;
        var blocksList = this.props.blocks.map(function (item) {
            return React.createElement(react_bootstrap_1.ListGroupItem, {key: item.id}, " ", React.createElement(Block_1.default, {model: item}));
        });
        return (React.createElement(react_bootstrap_1.Tabs, {activeKey: selectedTab, onSelect: this.handleSelect}, React.createElement(react_bootstrap_1.Tab, {eventKey: 1, title: 'Editor'}, React.createElement(react_bootstrap_1.ListGroup, null, blocksList), React.createElement(react_bootstrap_1.Button, {bsSize: 'large', block: true, onClick: function () {
            actions_1.addBlock(new block_1.default(0, ""));
        }}, "+"), React.createElement(Editor_1.default, {theme: 'snow', quillBlock: quillBlock, showBlockEditor: showBlockEditor, quillContent: quillContent})), React.createElement(react_bootstrap_1.Tab, {eventKey: 2, title: 'Preview...'}, React.createElement(Preview_1.default, {blocks: this.props.blocks}))));
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
        quillBlock: state.quillBlock
    };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(select)(App);
