///<reference path="../../../libs/typings/react.d.ts" />
///<reference path="../../../libs/typings/classnames.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var cx = require('classnames');
var count = 0;
function uuid() {
    return 'react-quill-toolbar-' + count++;
}
;
var defaultColors = [
    'rgb(  0,   0,   0)', 'rgb(230,   0,   0)', 'rgb(255, 153,   0)',
    'rgb(255, 255,   0)', 'rgb(  0, 138,   0)', 'rgb(  0, 102, 204)',
    'rgb(153,  51, 255)', 'rgb(255, 255, 255)', 'rgb(250, 204, 204)',
    'rgb(255, 235, 204)', 'rgb(255, 255, 204)', 'rgb(204, 232, 204)',
    'rgb(204, 224, 245)', 'rgb(235, 214, 255)', 'rgb(187, 187, 187)',
    'rgb(240, 102, 102)', 'rgb(255, 194, 102)', 'rgb(255, 255, 102)',
    'rgb(102, 185, 102)', 'rgb(102, 163, 224)', 'rgb(194, 133, 255)',
    'rgb(136, 136, 136)', 'rgb(161,   0,   0)', 'rgb(178, 107,   0)',
    'rgb(178, 178,   0)', 'rgb(  0,  97,   0)', 'rgb(  0,  71, 178)',
    'rgb(107,  36, 178)', 'rgb( 68,  68,  68)', 'rgb( 92,   0,   0)',
    'rgb(102,  61,   0)', 'rgb(102, 102,   0)', 'rgb(  0,  55,   0)',
    'rgb(  0,  41, 102)', 'rgb( 61,  20,  10)',
].map(function (color) { return { value: color }; });
var defaultItems = [
    { label: 'Formats', type: 'group', items: [
            { label: 'Font', type: 'font', items: [
                    { label: 'Sans Serif', value: 'sans-serif' },
                    { label: 'Serif', value: 'serif' },
                    { label: 'Monospace', value: 'monospace' }
                ] },
            { type: 'separator' },
            { label: 'Size', type: 'size', items: [
                    { label: 'Normal', value: '10px' },
                    { label: 'Smaller', value: '13px' },
                    { label: 'Larger', value: '18px' },
                    { label: 'Huge', value: '32px' }
                ] },
            { type: 'separator' },
            { label: 'Alignment', type: 'align', items: [
                    { label: '', value: 'center' },
                    { label: '', value: 'left' },
                    { label: '', value: 'right' },
                    { label: '', value: 'justify' }
                ] }
        ] },
    { label: 'Text', type: 'group', items: [
            { type: 'bold', label: 'Bold' },
            { type: 'italic', label: 'Italic' },
            { type: 'strike', label: 'Strike' },
            { type: 'underline', label: 'Underline' },
            { type: 'separator' },
            { type: 'color', label: 'Color', items: defaultColors },
            { type: 'background', label: 'Background color', items: defaultColors },
        ] },
    { label: 'Blocks', type: 'group', items: [
            { type: 'bullet', label: 'Bullet' },
            { type: 'separator' },
            { type: 'list', label: 'List' },
            { type: 'separator' },
            { type: 'image', label: 'Image' }
        ] }
];
function renderSeparator(key) {
    return React.DOM.span({
        key: key,
        className: 'ql-format-separator'
    });
}
;
function renderGroup(item, key) {
    return React.DOM.span({
        key: item.label || key,
        className: 'ql-format-group' }, item.items.map(renderItem));
}
function renderChoiceItem(item, key) {
    return React.DOM.option({
        key: item.label || item.value || key,
        value: item.value }, item.label);
}
function renderChoices(item, key) {
    return React.DOM.select({
        key: item.label || key,
        className: 'ql-' + item.type }, item.items.map(renderChoiceItem));
}
function renderAction(item, key) {
    return React.DOM.span({
        key: item.label || item.value || key,
        className: 'ql-format-button ql-' + item.type,
        title: item.label });
}
function renderItem(item, key) {
    switch (item.type) {
        case 'separator':
            return renderSeparator(key);
        case 'group':
            return renderGroup(item, key);
        case 'font':
        case 'align':
        case 'size':
        case 'color':
        case 'background':
            return renderChoices(item, key);
        default:
            return renderAction(item, key);
    }
}
function getClassName() {
    return 'quill-toolbar ' + (this.props.className || '');
}
var QuillToolbar = (function (_super) {
    __extends(QuillToolbar, _super);
    function QuillToolbar() {
        _super.apply(this, arguments);
    }
    QuillToolbar.prototype.render = function () {
        return React.createElement("div", {"className": cx('quill-toolbar', this.props.className)}, this.props.items.map(renderItem));
    };
    QuillToolbar.defaultProps = {
        items: defaultItems,
    };
    return QuillToolbar;
})(React.Component);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = QuillToolbar;
