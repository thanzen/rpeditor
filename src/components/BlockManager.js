var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
///<reference path="../../libs/typings/react.d.ts" />
var React = require('react');
var Block_ = require("./Block");
var block_ = require("../models/block");
var ListGroup = require('react-bootstrap/lib/ListGroup');
var Button = require('react-bootstrap/lib/Button');
var Ed = require('./Editor');
var disp = require("../dispatcher");
var dispatcher = disp.Dispatcher;
var eventType = disp.EventType;
var Editor = Ed.Editor;
var BlockView = Block_.Block;
var wellStyles = { maxWidth: 400, margin: '0 auto 10px' };
var buttonsInstance = (React.createElement("div", {"className": 'well', "style": wellStyles}, React.createElement(Button, {"bsStyle": 'primary', "bsSize": 'large', "block": true}, "Block level button")));
var BlockManager = (function (_super) {
    __extends(BlockManager, _super);
    function BlockManager(props) {
        var _this = this;
        _super.call(this, props);
        this.handleAddBlock = function () {
            _this.addBlock(new block_.Block(0));
        };
        this.addBlock = function (block) {
            if (block) {
                _this.state.blocks.push(block);
                _this.setState({ blocks: _this.state.blocks });
                dispatcher.dispatch({ type: eventType.QUILL_OPEN, block: block });
            }
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
        this.state = { value: "", blocks: [new block_.Block(0, "Next gen editor")] };
        this.registerEvents();
    }
    BlockManager.prototype.render = function () {
        var self = this;
        var blocks = this.state.blocks.map(function (item) {
            return React.createElement(BlockView, {"model": item});
        });
        return (React.createElement("div", null, React.createElement(ListGroup, null, blocks), React.createElement(Button, {"bsSize": 'large', "block": true, "onClick": this.handleAddBlock}, "+"), React.createElement(Editor, {"theme": 'snow', "value": this.state.value})));
    };
    BlockManager.prototype.registerEvents = function () {
        var self = this;
        dispatcher.register(function (action) {
            switch (action.type) {
                case eventType.QUILL_CLOSE:
                    if (!action.block.content || action.block.content.trim() === "") {
                        self.removeBlock(action.block);
                    }
                    else {
                        self.setState({ blocks: self.state.blocks });
                    }
                default:
                    break;
            }
        });
    };
    return BlockManager;
})(React.Component);
exports.BlockManager = BlockManager;
;
