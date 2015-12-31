import * as React  from 'react';
import  BlockView from "./Block";
import  {default as BlockModal} from "../models/block";
import  {ListGroupItem,ListGroup} from 'react-bootstrap';

interface Props { blocks?: Array<BlockModal>}
export default class BlockList extends React.Component<Props, {}> {
    constructor(props) {
        super(props);
    }
    render() {
        var blocks: any = this.props.blocks.map(function(item) {
            return <ListGroupItem key={item.id} > <BlockView model={item}/> </ListGroupItem>;
        });
        return (
            <ListGroup>{blocks}</ListGroup>
        );
    }
};
