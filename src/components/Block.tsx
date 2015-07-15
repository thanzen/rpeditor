///<reference path="../../libs/typings/react.d.ts" />
import * as React  from 'react';
import * as block from "../models/block";
import * as ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
interface Props{model:block.Block,onClick:Function}
export class Block extends React.Component<Props, {}> {
  handleClick(content: string) {
    if(this.props.onClick)
    {
      this.props.onClick(content);
    }
  }
  render() {
      return (
          <ListGroupItem onClick={this.handleClick.bind(this, this.props.model.content) }>
            {this.props.model.content}
          </ListGroupItem>
          );
  }
};
