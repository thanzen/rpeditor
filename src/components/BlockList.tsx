import * as React  from 'react';
import  BlockView from "./Block";
import  {default as BlockModal} from "../models/block";
import  {ListGroupItem,ListGroup,Button,Tabs,Tab} from 'react-bootstrap';
import {default as Preview} from './Preview';
import  Editor from './Editor';
import {default as dispatcher}  from "../dispatcher";
import  {default as eventType}  from "../eventType";
interface Props { blocks?: Array<BlockModal>}
export default class BlockList extends React.Component<Props, {}> {
    constructor(props) {
        super(props);
    }
    render() {
        var self = this;
        var blocks: any = this.props.blocks.map(function(item) {
            return <ListGroupItem key={item.id} > <BlockView model={item}/></ListGroupItem>;
        });
        return (
              <ListGroup>{blocks}</ListGroup>
            );
    }
};
