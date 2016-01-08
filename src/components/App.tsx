import * as React  from 'react';
import BlockView from "./Block";
import {default as BlockModel} from "../models/block";
import {ListItem, List, Button, Tabs} from 'amazeui-react';
import {default as Preview} from './Preview';
import {default as FixedTopBar} from './FixedTopBar';
import Editor from './Editor';
import {default as eventType}  from "../eventType";

import {openEditor, closeEditor, selectTab} from '../actions'
import { connect } from 'react-redux';
interface Props { blocks?: BlockModel[], selectedTab?: number, quillBlock?: BlockModel, showBlockEditor?: boolean, quillContent?: string, canMoveUp?: boolean, canMoveDown?: boolean }
interface State { }
const wellStyles = { maxWidth: 400, margin: '0 auto 10px' };

class App extends React.Component<Props, State> {
    constructor(props) {
        super(props);
    }
    handleSelect = (key) => {
        selectTab(key);
    }
    render() {
        const { blocks, selectedTab, quillBlock, showBlockEditor, quillContent, canMoveUp, canMoveDown } = this.props;
        var blocksList: any = this.props.blocks.map(function(item) {
            return <ListItem  key={item.id} > <BlockView model={item} quillBlockModel={quillBlock}/></ListItem>;
        });
        return (<div>
            <FixedTopBar activeIcon='am-icon-edit' inactiveIcon='am-icon-edit' isActive={true} quillModel={quillBlock} canMoveUp={canMoveUp} canMoveDown = {canMoveDown}>
            </FixedTopBar>
            <Tabs activeKey={selectedTab} onSelect={this.handleSelect}>
                <Tabs.Item eventKey={1} title='Editor'>
                    <List>{blocksList}</List>
                    <Editor theme={'snow'} quillBlock={quillBlock} showBlockEditor={showBlockEditor} quillContent={quillContent}></Editor>
                </Tabs.Item>
                <Tabs.Item eventKey={2} title='Preview...'>
                    <Preview blocks={this.props.blocks}/>
                </Tabs.Item>
            </Tabs>
        </div>
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
        quillContent: state.quillContent,
        quillBlock: state.quillBlock,
        canMoveUp: state.canMoveUp,
        canMoveDown: state.canMoveDown
    }
}
// Wrap the component to inject dispatch and state into it
export default connect(select)(App)
