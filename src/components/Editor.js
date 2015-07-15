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
var Block = (function (_super) {
    __extends(Block, _super);
    function Block(props) {
        _super.call(this, props);
        this.state = { showModal: false };
    }
    Block.prototype.close = function () {
        this.setState({ showModal: false });
    };
    Block.prototype.open = function () {
        this.setState({ showModal: true });
    };
    Block.prototype.render = function () {
        return (React.createElement(Modal, {"show": this.state.showModal, "onHide": this.close}, React.createElement(Modal.Header, {"closeButton": true}, React.createElement(Modal.Title, null, "Modal heading")), React.createElement(Modal.Body, null, React.createElement(ReactQuill, {"theme": this.props.theme, "value": this.props.value})), React.createElement(Modal.Footer, null, React.createElement(Button, {"onClick": this.close}, "Close"))));
    };
    Block.defaultProps = { theme: "snow", value: "" };
    return Block;
})(React.Component);
exports.Block = Block;
;
exports.Editor = React.createClass({
    getDefaultProps: function () {
        return { theme: "snow", value: "", showModal: false };
    },
    componentDidMount: function () {
        this.setState({ showModal: this.props.showModal });
    },
    getInitialState: function () {
        return { value: "", showModal: false };
    },
    close: function () {
        this.setState({ showModal: false });
    },
    open: function () {
        this.setState({ showModal: true });
    },
    render: function () {
        return (React.createElement(Modal, {"show": this.state.showModal, "onHide": this.close}, React.createElement(Modal.Header, {"closeButton": true}, React.createElement(Modal.Title, null, "Modal heading")), React.createElement(Modal.Body, null, React.createElement(ReactQuill, {"theme": this.props.theme, "value": this.props.value})), React.createElement(Modal.Footer, null, React.createElement(Button, {"onClick": this.close}, "Close"))));
    }
});
