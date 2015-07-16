///<reference path="../../libs/typings/react.d.ts" />
import * as React  from 'react';
import * as Block_ from "./Block";
import * as block_ from "../models/block";
import * as ListGroup from 'react-bootstrap/lib/ListGroup';
import * as Ed from './Editor';
import disp = require("../dispatcher");
var dispatcher = disp.Dispatcher;
var eventType = disp.EventType;
var Editor = Ed.Editor;
var BlockView = Block_.Block;

interface Props {}
interface State { value?: string, blocks?: Array<block_.Block> }
export class BlockManager extends React.Component<Props, State> {
    static defaultProps = { blocks: [new block_.Block(0, "this is a test")] };

    constructor(props) {
        super(props);
        this.state = { value: "", blocks: [new block_.Block(0, "this is a test")]};
        this.registerEvents();
    }

    render() {
        var self = this;
        var blocks: any = this.state.blocks.map(function(item) {
            return <BlockView model={item} />;
        });
        return (
            <div>
            <ListGroup>{blocks}</ListGroup>
            <Editor theme={'snow'} value={this.state.value}></Editor>
            </div>
            );
    }
    registerEvents() {
        var self = this;
        dispatcher.register(function(action) {
            //dispatcher.waitFor();
            switch (action.type) {
                case eventType.QUILL_CLOSE:
                    self.setState({ blocks: self.state.blocks });
                //alert("what is going on here!");
                default:
                    break;
            }
        });
    }

};
