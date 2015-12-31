"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var react_bootstrap_1 = require('react-bootstrap');
var block_1 = require("../models/block");
var QEditor_1 = require("./quill/QEditor");
var actions_1 = require("../actions");
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
            actions_1.closeEditor();
        };
        this.onSubmit = function () {
            var block = new block_1.default(_this.props.quillBlock.id, _this.props.quillContent);
            actions_1.submitChange(block);
        };
        this.onTextChange = function (value) {
            actions_1.changeQuillContent(value);
        };
    }
    Editor.prototype.render = function () {
        return (React.createElement(react_bootstrap_1.Modal, {show: this.props.showBlockEditor, dialogClassName: 'rpeditor-quill-dialog', onHide: function () { }}, React.createElement(react_bootstrap_1.Modal.Header, null, React.createElement(react_bootstrap_1.Modal.Title, null, "Blcok Editor")), React.createElement(react_bootstrap_1.Modal.Body, null, React.createElement("div", {style: dialogStyle}, React.createElement(QEditor_1.default, {theme: this.props.theme, value: this.props.quillContent, onChange: this.onTextChange, modules: modules}))), React.createElement(react_bootstrap_1.Modal.Footer, null, React.createElement(react_bootstrap_1.Button, {onClick: this.onSubmit}, "OK"), React.createElement(react_bootstrap_1.Button, {onClick: this.close}, "CANCEL"))));
    };
    return Editor;
})(React.Component);
;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Editor;
