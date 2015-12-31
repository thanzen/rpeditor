import * as React  from 'react';
import {default as BlockModal} from "../models/block";
import {default as BlockContent} from "./BlockContent";
import {default as BlockFooter} from "./BlockFooter";
import {default as dispatcher}  from "../dispatcher";
import {default as eventType}  from "../eventType";
interface Props { model: BlockModal}

const boxStyle = {
  padding: "5px",
  border: "3px solid gray",
  margin: "0"
};

export default class Block extends React.Component<Props, {}> {
  render() {
    return (
        <div >
          <BlockContent model = {this.props.model} boxStyle={boxStyle} />
          <BlockFooter model ={this.props.model}/>
        </div>
    );
  }
};
