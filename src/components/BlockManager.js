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
var Ed = require('./Editor');
var disp = require("../dispatcher");
var dispatcher = disp.Dispatcher;
var eventType = disp.EventType;
var Editor = Ed.Editor;
var BlockView = Block_.Block;
var BlockManager = (function (_super) {
    __extends(BlockManager, _super);
    function BlockManager(props) {
        _super.call(this, props);
        this.state = { value: "", blocks: [new block_.Block(0, "this is a test")] };
        this.registerEvents();
    }
    BlockManager.prototype.render = function () {
        var self = this;
        var blocks = this.state.blocks.map(function (item) {
            return React.createElement(BlockView, {"model": item});
        });
        return (React.createElement("div", null, React.createElement(ListGroup, null, blocks), React.createElement(Editor, {"theme": 'snow', "value": this.state.value})));
    };
    BlockManager.prototype.registerEvents = function () {
        var self = this;
        dispatcher.register(function (action) {
            switch (action.type) {
                case eventType.QUILL_CLOSE:
                    self.setState({ blocks: self.state.blocks });
                default:
                    break;
            }
        });
    };
    BlockManager.defaultProps = { blocks: [new block_.Block(0, "this is a test")] };
    return BlockManager;
})(React.Component);
exports.BlockManager = BlockManager;
;
