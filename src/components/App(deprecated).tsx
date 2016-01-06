import * as React  from 'react';
import  BlockView from "./Block";
import  {default as BlockModal} from "../models/block";
import  {ListGroupItem,ListGroup,Button,Tabs,Tab} from 'react-bootstrap';
import {default as Preview} from './Preview';
import  Editor from './Editor';
import  {default as eventType}  from "../eventType";
import {uuid} from "../utils";

import {openEditor,closeEditor,addBlock,deleteBlock,selectTab} from '../actions'
import { connect } from 'react-redux';
interface Props { blocks?:BlockModal[], selectedTab?: number, quillBlock?:BlockModal, showBlockEditor?:boolean, quillContent?:string}
interface State { }
const wellStyles = { maxWidth: 400, margin: '0 auto 10px' };

class App extends React.Component<Props, State> {
    constructor(props) {
        super(props);
    }
    handleSelect=(key)=> {
        selectTab(key);
    }
    render() {
        const { blocks, selectedTab, quillBlock, showBlockEditor,quillContent } = this.props;
        var blocksList: any = this.props.blocks.map(function(item) {
            return <ListGroupItem  key={item.id} > <BlockView model={item}/></ListGroupItem>;
        });
        return (
            <Tabs activeKey={selectedTab} onSelect={this.handleSelect}>
              <Tab eventKey={1} title='Editor'>
                <ListGroup>{blocksList}</ListGroup>
                <Button bsSize='large' block onClick = {()=>{
                  addBlock(new BlockModal(0,""));
                }}>+</Button>
                <Editor theme={'snow'} quillBlock={quillBlock} showBlockEditor={showBlockEditor} quillContent={quillContent}></Editor>
              </Tab>
              <Tab eventKey={2} title='Preview...'>
                <Preview blocks={this.props.blocks}/>
              </Tab>
            </Tabs>
      );
    }
};

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
  return {
    blocks: state.blocks,
    selectedTab: state.selectedTab,
    showBlockEditor: state.showBlockEditor,
    quillContent:state.quillContent,
    quillBlock:state.quillBlock
  }
}
// Wrap the component to inject dispatch and state into it
export default connect(select)(App)
