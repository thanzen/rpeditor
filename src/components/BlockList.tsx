import * as React  from 'react';
import  BlockView from "./Block";
import  {default as BlockModel} from "../models/block";
import  {List,ListItem} from 'amazeui-react';

interface Props { blocks?: Array<BlockModel>, quillBlockModel:BlockModel}
export default class BlockList extends React.Component<Props, {}> {
    constructor(props) {
        super(props);
    }
    render() {
        var blocks: any = this.props.blocks.map(function(item) {
            return <ListItem key={item.id} > <BlockView model={item} quillBlockModel={this.props.quillBlockModel}/> </ListItem>;
        });
        return (
            <List>{blocks}</List>
        );
    }
};
