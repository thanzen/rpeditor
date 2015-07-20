///<reference path="../../libs/typings/react.d.ts" />
import * as React  from 'react';
import * as block from "../models/block";
import * as ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import disp = require("../dispatcher");
var dispatcher = disp.Dispatcher;
var eventType = disp.EventType;
interface Props{model:block.Block,key?:any,onClick?:Function}
export class Block extends React.Component<Props, {}> {
  handleClick=(model: block.Block)=> {
    dispatcher.dispatch({ type: eventType.QUILL_OPEN, block: model });
  }
  render() {
      return (
          <ListGroupItem  onClick={this.handleClick.bind(this, this.props.model) }>
          <div dangerouslySetInnerHTML={{__html: this.props.model.content}} />
          </ListGroupItem>
          );
  }
};
