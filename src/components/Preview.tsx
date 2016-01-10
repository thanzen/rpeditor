import * as React  from 'react';
import BlockModel from "../models/block";
import BlockContent from "./BlockContent";
interface Props { blocks?: Array<BlockModel> }
interface State { }

export default class Preview extends React.Component<Props, State> {
    constructor(props) {
        super(props);
    }
    render() {
        var blocks: any = this.props.blocks.map(function(item) {
            return <BlockContent key={item.id} model={item} />
        });
        return (
            <div>{blocks}</div>
        );
    }
};
