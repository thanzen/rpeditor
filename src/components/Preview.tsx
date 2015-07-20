///<reference path="../../libs/typings/react.d.ts" />
import * as React  from 'react';
import * as block_ from "../models/block";
interface Props {blocks?: Array<block_.Block> }
interface State { }

export class Preview extends React.Component<Props, State> {
    constructor(props) {
        super(props);
    }
    render() {
        var blocks: any = this.props.blocks.map(function(item) {
            return <div dangerouslySetInnerHTML={{__html: item.content}} /*key={item.id}*/ />
        });
        return (
          <div>{blocks}</div>
        );
    }
};
