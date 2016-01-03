"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var amazeui_react_1 = require('amazeui-react');
var block_1 = require("../models/block");
var QEditor_1 = require("./quill/QEditor");
var actions_1 = require("../actions");
var dialogStyle = {
    width: '100%',
    height: '400px',
    textAlign: "left"
};
var hideStyle = {
    display: 'none'
};
var buttonStyle = {
    width: "50%",
    height: "100%"
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
            actions_1.closeEditor();
            _this.refs.modal.props.onRequestClose();
        };
        this.onSubmit = function () {
            var block = new block_1.default(_this.props.quillBlock.id, _this.props.quillContent);
            actions_1.submitChange(block);
            _this.refs.modal.props.onRequestClose();
        };
        this.onTextChange = function (value) {
            actions_1.changeQuillContent(value);
        };
        this.componentDidUpdate = function (prevProps, prevState) {
            if (prevProps.showBlockEditor != _this.props.showBlockEditor && _this.props.showBlockEditor) {
                _this.refs.btnOpen.props.onClick();
            }
        };
    }
    Editor.prototype.render = function () {
        var modal = (React.createElement(amazeui_react_1.Modal, {cancelText: "Cancel", confirmText: "OK", ref: "modal", closeIcon: false}, React.createElement("div", {style: dialogStyle}, React.createElement(QEditor_1.default, {theme: this.props.theme, value: this.props.quillContent, onChange: this.onTextChange, modules: modules})), React.createElement(amazeui_react_1.Divider, null), React.createElement("div", null, React.createElement(amazeui_react_1.Button, {onClick: this.onSubmit, style: buttonStyle}, "OK"), React.createElement(amazeui_react_1.Button, {onClick: this.close, style: buttonStyle}, "CANCEL"))));
        return (React.createElement(amazeui_react_1.ModalTrigger, {modal: modal, onCancel: this.close, onConfirm: this.onSubmit, modalWidth: "700px"}, React.createElement(amazeui_react_1.Button, {amStyle: 'primary', ref: "btnOpen", style: hideStyle}, "open")));
    };
    return Editor;
}(React.Component));
;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Editor;
