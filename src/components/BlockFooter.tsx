import * as React  from 'react';
import {default as BlockModal} from "../models/block";
import {openEditor,deleteBlock} from '../actions'
interface Props { model: BlockModal}

export default class Block extends React.Component<Props, {}> {
  render() {
    return (
      <div>
          <button type="button" className="btn btn-default  btn-xs"  onClick={()=>{openEditor(this.props.model);}}>
              <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
          </button>
          <button type="button" className="btn btn-default  btn-xs" onClick={()=>{deleteBlock(this.props.model);}}>
              <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
          </button>
      </div>
    );
  }
};
