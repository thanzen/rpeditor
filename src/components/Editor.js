var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var react_bootstrap_1 = require('react-bootstrap');
var QEditor_1 = require("./quill/QEditor");
var dispatcher_1 = require("../dispatcher");
var eventType_1 = require("../eventType");
var dialogStyle = {
    width: '100%',
    height: '400px'
};
var modules = {
    'image-tooltip': true
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
        return (React.createElement(react_bootstrap_1.Modal, {show: this.state.showModal, dialogClassName: 'rpeditor-quill-dialog', onHide: function () { }}, React.createElement(react_bootstrap_1.Modal.Header, null, React.createElement(react_bootstrap_1.Modal.Title, null, "Blcok Editor")), React.createElement(react_bootstrap_1.Modal.Body, null, React.createElement("div", {style: dialogStyle}, React.createElement(QEditor_1.default, {theme: this.props.theme, value: this.state.value, onChange: this.onTextChange, modules: modules}))), React.createElement(react_bootstrap_1.Modal.Footer, null, React.createElement(react_bootstrap_1.Button, {onClick: this.close}, "Close"))));
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
