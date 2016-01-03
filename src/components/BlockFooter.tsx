import * as React  from 'react';
import {default as BlockModal} from "../models/block";
import {openEditor,deleteBlock} from '../actions'
interface Props { model: BlockModal}

export default class Block extends React.Component<Props, {}> {
  render() {
    return (
      <div>
          <a><i className="am-icon-pencil am-icon-fw" onClick={()=>{openEditor(this.props.model);}}></i></a>
          <a><i className="am-icon-minus am-icon-fw" onClick={()=>{deleteBlock(this.props.model);}}></i></a>
      </div>
    );
  }
};
