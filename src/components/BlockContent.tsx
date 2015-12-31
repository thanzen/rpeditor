import * as React  from 'react';
import {default as BlockModal} from "../models/block";
import {default as dispatcher}  from "../dispatcher";
import {default as eventType}  from "../eventType";

interface Props { model?: BlockModal,boxStyle?:any}
export default class BlockContent extends React.Component<Props, {}> {
  render() {
    return (
        <div dangerouslySetInnerHTML={{ __html: this.props.model.content }}  style={this.props.boxStyle}/>
    );
  }
};
