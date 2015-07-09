///<reference path="../../libs/typings/react.d.ts" />
import * as React  from 'react';
import * as block from "../models/block";
export var Block = React.createClass({
    getDefaultProps: function () {
        return { model: new block.Block() };
    },
    render: function () {
      return (
          <li><div>{this.props.model.content}</div></li>
          );
    }
});
