import * as React  from 'react';
import BlockModal from "../models/block";
import eventType  from "../eventType";

interface Props { model?: BlockModal, boxStyle?: any,key?:any }
export default class BlockContent extends React.Component<Props, {}> {
    render() {
        return (
            <div dangerouslySetInnerHTML={{ __html: this.props.model.content.replace(/(?!<[^<]*) (?![^<>]*>)/g, "\u00a0") }}  style={this.props.boxStyle}/>
        );
    }
};
