var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
///<reference path="../../libs/typings/react.d.ts" />
///<reference path="../../libs/typings/react-quill.d.ts" />
/// <reference path="../../libs/typings/react-bootstrap.d.ts"/>
var React = require('react');
var ReactQuill = require('react-quill');
var Modal = require('react-bootstrap/lib/Modal');
var Button = require('react-bootstrap/lib/Button');
var disp = require("../dispatcher");
var dispatcher = disp.Dispatcher;
var eventType = disp.EventType;
var Editor = (function (_super) {
    __extends(Editor, _super);
    function Editor(props) {
        var _this = this;
        _super.call(this, props);
        this.close = function () {
            _this.setState({ showModal: false });
            _this.block.content = _this.state.value;
            dispatcher.dispatch({ type: eventType.QUILL_CLOSE, block: _this.block });
        };
        this.open = function () {
            _this.setState({ showModal: true });
        };
        this.onTextChange = function (value) {
            _this.setState({ value: value });
        };
        this.state = { showModal: false, value: "" };
        this.registerEvents();
    }
    Editor.prototype.render = function () {
        return (React.createElement(Modal, {"show": this.state.showModal, "onHide": this.close}, React.createElement(Modal.Header, {"closeButton": true}, React.createElement(Modal.Title, null, "Modal heading")), React.createElement(Modal.Body, null, React.createElement(ReactQuill, {"theme": this.props.theme, "value": this.state.value, "onChange": this.onTextChange})), React.createElement(Modal.Footer, null, React.createElement(Button, {"onClick": this.close}, "Close"))));
    };
    Editor.prototype.registerEvents = function () {
        var self = this;
        dispatcher.register(function (action) {
            switch (action.type) {
                case eventType.QUILL_OPEN:
                    self.setState({ showModal: true, value: action.block.content });
                    self.block = action.block;
                default:
                    break;
            }
        });
    };
    Editor.defaultProps = { theme: "snow", value: "" };
    return Editor;
})(React.Component);
exports.Editor = Editor;
;
