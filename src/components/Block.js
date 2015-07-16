var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
///<reference path="../../libs/typings/react.d.ts" />
var React = require('react');
var ListGroupItem = require('react-bootstrap/lib/ListGroupItem');
var disp = require("../dispatcher");
var dispatcher = disp.Dispatcher;
var eventType = disp.EventType;
var Block = (function (_super) {
    __extends(Block, _super);
    function Block() {
        _super.apply(this, arguments);
        this.handleClick = function (model) {
            dispatcher.dispatch({ type: eventType.QUILL_OPEN, block: model });
        };
    }
    Block.prototype.render = function () {
        return (React.createElement(ListGroupItem, {"onClick": this.handleClick.bind(this, this.props.model)}, this.props.model.content));
    };
    return Block;
})(React.Component);
exports.Block = Block;
;
