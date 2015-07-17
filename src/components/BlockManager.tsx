///<reference path="../../libs/typings/react.d.ts" />
import * as React  from 'react';
import * as Block_ from "./Block";
import * as block_ from "../models/block";
import * as ListGroup from 'react-bootstrap/lib/ListGroup';
import * as Button from 'react-bootstrap/lib/Button';
import * as Ed from './Editor';
import disp = require("../dispatcher");
var dispatcher = disp.Dispatcher;
var eventType = disp.EventType;
var Editor = Ed.Editor;
var BlockView = Block_.Block;

interface Props { }
interface State { value?: string, blocks?: Array<block_.Block> }
const wellStyles = { maxWidth: 400, margin: '0 auto 10px' };

const buttonsInstance = (
    <div className='well' style={wellStyles}>
    <Button bsStyle='primary' bsSize='large' block>Block level button</Button>
    </div>
    );

export class BlockManager extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = { value: "", blocks: [new block_.Block(0, "Next gen editor")] };
        this.registerEvents();
    }
    handleAddBlock = () => {
        this.addBlock(new block_.Block(0));
    }
    addBlock = (block: block_.Block) => {
        if (block) {
            this.state.blocks.push(block);
            this.setState({ blocks: this.state.blocks });
            dispatcher.dispatch({ type: eventType.QUILL_OPEN, block: block });
        }
    }
    removeBlock = (block: block_.Block) => {
        if (block) {
            var index = this.state.blocks.indexOf(block, 0);
            if (index != undefined) {
                this.state.blocks.splice(index, 1);
            }
            this.setState({ blocks: this.state.blocks });
        }
    }
    render() {
        var self = this;
        var blocks: any = this.state.blocks.map(function(item) {
            return <BlockView model={item} />;
        });
        return (
            <div>
            <ListGroup>{blocks}</ListGroup>
            <Button bsSize='large' block onClick = {this.handleAddBlock}>+</Button>
            <Editor theme={'snow'} value={this.state.value}></Editor>
            </div>
            );
    }
    registerEvents() {
        var self = this;
        dispatcher.register(function(action) {
            switch (action.type) {
                case eventType.QUILL_CLOSE:
                    if (!action.block.content || action.block.content.trim() === "") {
                        self.removeBlock(action.block);
                    } else {
                        self.setState({ blocks: self.state.blocks });
                    }
                default:
                    break;
            }
        });
    }

};
