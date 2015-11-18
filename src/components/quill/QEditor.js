var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var ReactDom = require('react-dom');
var Toolbar_1 = require('./Toolbar');
var Quill = require('quill');
var cx = require('classnames');
var editorStyle = {
    overflow: 'hidden',
    maxHeight: '360px'
};
var QuillComponent = (function (_super) {
    __extends(QuillComponent, _super);
    function QuillComponent() {
        var _this = this;
        _super.apply(this, arguments);
        this.hookEditor = function (editor) {
            var self = _this;
            editor.on('text-change', function (delta, source) {
                if (self.onEditorChange) {
                    self.onEditorChange(editor.getHTML(), delta, source);
                }
            });
        };
        this.renderContents = function () {
            if (React.Children.count(_this.props.children)) {
                return React.Children.only(_this.props.children);
            }
            return (React.createElement("div", null, React.createElement(Toolbar_1.default, {key: 'toolbar', ref: 'toolbar', items: _this.props.toolbar}), React.createElement("div", {style: editorStyle}, React.createElement("div", {key: 'editor', ref: 'editor', className: 'quill-contents', dangerouslySetInnerHTML: { __html: _this.getEditorContents() }}))));
        };
    }
    QuillComponent.prototype.createEditor = function ($el, config) {
        var editor = new Quill($el, config);
        this.hookEditor(editor);
        editor.focus();
        return editor;
    };
    QuillComponent.prototype.updateEditor = function (editor, config) {
        this.destroyEditor(editor);
        this.createEditor(config);
        return editor;
    };
    QuillComponent.prototype.destroyEditor = function (editor) {
        editor.destroy();
    };
    QuillComponent.prototype.setEditorContents = function (editor, value) {
        var sel = editor.getSelection();
        editor.setHTML(value);
        editor.setSelection(sel);
    };
    QuillComponent.prototype.componentWillReceiveProps = function (nextProps) {
        if ('value' in nextProps && nextProps.value !== this.props.value) {
            this.setEditorContents(this.state.editor, nextProps.value);
        }
    };
    QuillComponent.prototype.componentDidMount = function () {
        var editor = this.createEditor(this.getEditorElement(), this.getEditorConfig());
        this.setState({ editor: editor });
    };
    QuillComponent.prototype.componentWillUnmount = function () {
        this.destroyEditor(this.state.editor);
    };
    QuillComponent.prototype.shouldComponentUpdate = function () {
        return false;
    };
    QuillComponent.prototype.componentWillUpdate = function () {
        this.componentWillUnmount();
    };
    QuillComponent.prototype.componentDidUpdate = function () {
        this.componentDidMount();
    };
    QuillComponent.prototype.getEditorConfig = function () {
        var _a = this.props, readOnly = _a.readOnly, theme = _a.theme, formats = _a.formats, styles = _a.styles, pollInterval = _a.pollInterval;
        var modules = this.props.modules;
        if (!modules.toolbar) {
            modules = JSON.parse(JSON.stringify(modules));
            modules.toolbar = {
                container: ReactDom.findDOMNode(this.refs.toolbar)
            };
        }
        return { readOnly: readOnly, theme: theme, formats: formats, styles: styles, modules: modules, pollInterval: pollInterval };
    };
    QuillComponent.prototype.getEditorElement = function () {
        return ReactDom.findDOMNode(this.refs.editor);
    };
    QuillComponent.prototype.getEditorContents = function () {
        return this.props.value || this.props.defaultValue || '';
    };
    QuillComponent.prototype.render = function () {
        return (React.createElement("div", {className: cx('quill', this.props.className), onChange: this.preventDefault}, this.renderContents()));
    };
    QuillComponent.prototype.onEditorChange = function (value, delta, soure) {
        if (value !== this.state.value && this.props.onChange) {
            this.props.onChange(value);
        }
    };
    QuillComponent.prototype.preventDefault = function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    QuillComponent.defaultProps = {
        className: '',
        theme: 'base',
        modules: {}
    };
    return QuillComponent;
})(React.Component);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = QuillComponent;
