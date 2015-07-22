///<reference path="../../libs/typings/react.d.ts" />
import * as React  from 'react';
import * as Block_ from "./Block";
import * as block_ from "../models/block";
import * as ListGroup from 'react-bootstrap/lib/ListGroup';
import * as Button from 'react-bootstrap/lib/Button';
import * as TabbedArea from 'react-bootstrap/lib/TabbedArea';
import * as TabPane from 'react-bootstrap/lib/TabPane';
import * as preview from './Preview';
import  Editor from './Editor';
import disp = require("../dispatcher");
var dispatcher = disp.Dispatcher;
var eventType = disp.EventType;
var BlockView = Block_.Block;
var Preview = preview.Preview;

interface Props { }
interface State { value?: string, blocks?: Array<block_.Block>, selectedTab?: number }
const wellStyles = { maxWidth: 400, margin: '0 auto 10px' };

const buttonsInstance = (
    <div className='well' style={wellStyles}>
    <Button bsStyle='primary' bsSize='large' block>Block level button</Button>
    </div>
    );

export class BlockManager extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = { value: "", blocks: [new block_.Block(0, "Next gen editor")], selectedTab: 1 };
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

    handleSelect=(key)=> {
        this.setState({ selectedTab: key });
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
            return <BlockView model={item} /*key={item.id}*/ />;
        });
        return (
            <TabbedArea activeKey={this.state.selectedTab} onSelect={this.handleSelect}>
              <TabPane eventKey={1} tab='Editor'>
                <ListGroup>{blocks}</ListGroup>
                <Button bsSize='large' block onClick = {this.handleAddBlock}>+</Button>
                <Editor theme={'snow'} value={this.state.value}></Editor>
              </TabPane>
              <TabPane eventKey={2} tab='Preview...'><Preview blocks={this.state.blocks}/></TabPane>
            </TabbedArea>
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
