var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
///<reference path="../../libs/typings/react.d.ts" />
/// <reference path="../../libs/typings/react-bootstrap.d.ts"/>
var React = require('react');
var Modal = require('react-bootstrap/lib/Modal');
var Button = require('react-bootstrap/lib/Button');
var QEditor_1 = require("./quill/QEditor");
var dispatcher_1 = require("../dispatcher");
var eventType_1 = require("../eventType");
var dialogStyle = {
    width: '100%',
    height: '400px'
};
var Editor = (function (_super) {
    __extends(Editor, _super);
    function Editor(props) {
        var _this = this;
        _super.call(this, props);
        this.close = function () {
            _this.setState({ showModal: false });
            _this.block.content = _this.state.value;
            dispatcher_1.default.dispatch({ type: eventType_1.default.QUILL_CLOSE, block: _this.block });
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
        return (React.createElement(Modal, {"show": this.state.showModal, "dialogClassName": 'rpeditor-quill-dialog', "onHide": function () { }}, React.createElement(Modal.Header, null, React.createElement(Modal.Title, null, "Modal heading")), React.createElement(Modal.Body, null, React.createElement("div", {"style": dialogStyle}, React.createElement(QEditor_1.default, {"theme": this.props.theme, "value": this.state.value, "onChange": this.onTextChange}))), React.createElement(Modal.Footer, null, React.createElement(Button, {"onClick": this.close}, "Close"))));
    };
    Editor.prototype.registerEvents = function () {
        var self = this;
        dispatcher_1.default.register(function (action) {
            switch (action.type) {
                case eventType_1.default.QUILL_OPEN:
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
;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Editor;
