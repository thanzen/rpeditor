import * as React  from 'react';
import  BlockView from "./Block";
import  {default as BlockModal} from "../models/block";
import  {ListItem,List,Button,Tabs} from 'amazeui-react';
import {default as Preview} from './Preview';
import  Editor from './EditorNew';
import  {default as eventType}  from "../eventType";
import {uuid} from "../utils";

import {openEditor,closeEditor,addBlock,deleteBlock,selectTab} from '../actions'
import { connect } from 'react-redux';
interface Props { blocks?:BlockModal[], selectedTab?: number, quillBlock?:BlockModal, showBlockEditor?:boolean, quillContent?:string}
interface State { }
const wellStyles = { maxWidth: 400, margin: '0 auto 10px' };

class AppNew extends React.Component<Props, State> {
    constructor(props) {
        super(props);
    }
    handleSelect=(key)=> {
        selectTab(key);
    }
    render() {
        const { blocks, selectedTab, quillBlock, showBlockEditor,quillContent } = this.props;
        var blocksList: any = this.props.blocks.map(function(item) {
            return <ListItem  key={item.id} > <BlockView model={item}/></ListItem>;
        });
        return (
            <Tabs activeKey={selectedTab} onSelect={this.handleSelect}>
              <Tabs.Item eventKey={1} title='Editor'>
                <List>{blocksList}</List>
                <Button bsSize='large' block onClick = {()=>{
                  addBlock(new BlockModal(0,""));
                }}>+</Button>
                <Editor theme={'snow'} quillBlock={quillBlock} showBlockEditor={showBlockEditor} quillContent={quillContent}></Editor>
              </Tabs.Item>
              <Tabs.Item eventKey={2} title='Preview...'>
                <Preview blocks={this.props.blocks}/>
              </Tabs.Item>
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
export default connect(select)(AppNew)
