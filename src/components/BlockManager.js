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
var dispatcher_1 = require("../dispatcher");
var eventType_1 = require("../eventType");
var idGenerator = 0;
var wellStyles = { maxWidth: 400, margin: '0 auto 10px' };
var buttonsInstance = (React.createElement("div", {className: 'well', style: wellStyles}, React.createElement(react_bootstrap_1.Button, {bsStyle: 'primary', bsSize: 'large', block: true}, "Block level button")));
var content1 = "Rpeditor is a quill.js based block editor.</br>Rpeditor is written in typescript, therefore, any js files under src folder are not supposed to modify,</br>but ts or tsx files.</br>You can find source code in the <a href='https://github.com/thanzen/rpeditor'>github</a>";
var content2 = "Todo:</br>1. Support block level  drag and drop.</br>2. Styling the application.(help wanted).</br><img src='http://i.cbc.ca/1.3163246.1437577968!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/robert-gonsalves-deep-dream.jpg'/>";
var BlockManager = (function (_super) {
    __extends(BlockManager, _super);
    function BlockManager(props) {
        var _this = this;
        _super.call(this, props);
        this.handleAddBlock = function () {
            _this.addBlock(new block_1.default(idGenerator++));
        };
        this.addBlock = function (block) {
            if (block) {
                _this.state.blocks.push(block);
                _this.setState({ blocks: _this.state.blocks });
                dispatcher_1.default.dispatch({ type: eventType_1.default.QUILL_OPEN, block: block });
            }
        };
        this.handleSelect = function (key) {
            _this.setState({ selectedTab: key });
        };
        this.removeBlock = function (block) {
            if (block) {
                var index = _this.state.blocks.indexOf(block, 0);
                if (index != undefined) {
                    _this.state.blocks.splice(index, 1);
                }
                _this.setState({ blocks: _this.state.blocks });
            }
        };
        this.state = { value: "", blocks: [new block_1.default(idGenerator++, content1), new block_1.default(idGenerator++, content2)], selectedTab: 1 };
        this.registerEvents();
    }
    BlockManager.prototype.render = function () {
        var self = this;
        var blocks = this.state.blocks.map(function (item) {
            return React.createElement(Block_1.default, {model: item, key: item.id});
        });
        return (React.createElement(react_bootstrap_1.Tabs, {activeKey: this.state.selectedTab, onSelect: this.handleSelect}, React.createElement(react_bootstrap_1.Tab, {eventKey: 1, title: 'Editor'}, React.createElement(react_bootstrap_1.ListGroup, null, blocks), React.createElement(react_bootstrap_1.Button, {bsSize: 'large', block: true, onClick: this.handleAddBlock}, "+"), React.createElement(Editor_1.default, {theme: 'snow', value: this.state.value})), React.createElement(react_bootstrap_1.Tab, {eventKey: 2, title: 'Preview...'}, React.createElement(Preview_1.default, {blocks: this.state.blocks}))));
    };
    BlockManager.prototype.registerEvents = function () {
        var self = this;
        dispatcher_1.default.register(function (action) {
            switch (action.type) {
                case eventType_1.default.QUILL_CLOSE:
                    if (!action.block.content || action.block.content.trim() === "") {
                        self.removeBlock(action.block);
                    }
                    else {
                        self.setState({ blocks: self.state.blocks });
                    }
                    break;
                case eventType_1.default.BLOCK_DELTE:
                    if (action.block) {
                        self.removeBlock(action.block);
                    }
                    break;
                default:
                    break;
            }
        });
    };
    return BlockManager;
})(React.Component);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BlockManager;
;
