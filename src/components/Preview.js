var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
///<reference path="../../libs/typings/react.d.ts" />
var React = require('react');
var Preview = (function (_super) {
    __extends(Preview, _super);
    function Preview(props) {
        _super.call(this, props);
    }
    Preview.prototype.render = function () {
        var blocks = this.props.blocks.map(function (item) {
            return React.createElement("div", {"dangerouslySetInnerHTML": { __html: item.content }});
        });
        return (React.createElement("div", null, blocks));
    };
    return Preview;
})(React.Component);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Preview;
;
