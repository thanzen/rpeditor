///<reference path="../../libs/typings/react.d.ts" />
import * as React  from 'react';
import * as Block_ from "./Block";
import * as block_ from "../models/block";
var BlockView = Block_.Block;
function getBlockItem(block: block_.Block) {
    return <BlockView model={block}/>;
}
export var BlockManager = React.createClass({
    getDefaultProps: function() {
        return { blocks:[new block_.Block(),new block_.Block()] };
    },
    getInitialState: function() {
        return { value: "" };
    },
    render: function() {
        var blocks:any = this.props.blocks.map(getBlockItem);
        return (
            <ul>{blocks}</ul>
            );
    }
});
