///<reference path="../../libs/typings/react.d.ts" />
import * as React  from 'react';
import * as block from "../models/block";
export var Block = React.createClass({
    getDefaultProps: function() {
        return { model: new block.Block(0) };
    },
    handleClick: (content: string) => {
        alert(content);
    },
    render: function() {
        return (
            <li><textarea onClick={this.handleClick.bind(this, this.props.model.content) }>{this.props.model.content}</textarea></li>
            );
    }
});
