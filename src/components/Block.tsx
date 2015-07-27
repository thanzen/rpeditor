///<reference path="../../libs/typings/react.d.ts" />
import * as React  from 'react';
import  {default as BlockModal} from "../models/block";
import * as ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import {default as dispatcher}  from "../dispatcher";
import  {default as eventType}  from "../eventType";

interface Props{model:BlockModal,key?:any,onClick?:Function}
export default class Block extends React.Component<Props, {}> {
  handleAddBlock=(model: BlockModal)=> {
    dispatcher.dispatch({ type: eventType.QUILL_OPEN, block: model });
  }
  handleRemoveBlock=(model: BlockModal)=> {
    dispatcher.dispatch({ type: eventType.BLOCK_DELTE, block: model });
  }
  render() {
      return (
          <ListGroupItem >
            <div dangerouslySetInnerHTML={{__html: this.props.model.content}}   />
              <button type="button" className="btn btn-default  btn-xs"  onClick={this.handleAddBlock.bind(this, this.props.model) }>
                <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
              </button>
              <button type="button" className="btn btn-default  btn-xs" onClick={this.handleRemoveBlock.bind(this, this.props.model) }>
                <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
              </button>
          </ListGroupItem>
          );
  }
};
