///<reference path="../../libs/typings/react.d.ts" />
///<reference path="../../libs/typings/react-quill.d.ts" />
import * as React  from 'react';
import * as ReactQuill from 'react-quill';
import * as BlockManager_ from "./BlockManager";
var BlockManagerView = BlockManager_.BlockManager;
export = React.createClass({
    getDefaultProps() {
        return { theme: "snow" };
    },
    getInitialState() {
        return { value: "" };
    },
    render() {
        return (
            <div>
            <ReactQuill theme={this.props.theme} value={this.state.value} />
            <BlockManagerView/>
            </div>
            );
    }
});
