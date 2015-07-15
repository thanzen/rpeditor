///<reference path="../../libs/typings/react.d.ts" />
import * as React  from 'react';
import * as Block_ from "./Block";
import * as block_ from "../models/block";
import * as ListGroup from 'react-bootstrap/lib/ListGroup';
import * as Ed from './Editor';
import disp = require("../dispatcher");
var dispatcher = disp.Dispatcher;
var Editor = Ed.Editor;
var BlockView = Block_.Block;

export = React.createClass({
    getInitialState: function() {
        return ({ value: "" ,showModal:true});
    },

    getDefaultProps: function() {
        return { blocks: [new block_.Block(0, "this is a test")] };
    },

    handleClick: function(content: string) {
        this.setState({showModal:true});
    },

    render: function() {
        var self = this;
        var blocks: any = this.props.blocks.map(function(item) {
            return <BlockView model={item} onClick={self.handleClick}/>;
        });
        return (
            <div>
              <ListGroup>{blocks}</ListGroup>
              <Editor theme={'snow'} value={this.state.value} showModal={this.state.showModal}></Editor>
            </div>
            );
    },
    //todo: add register events.
    registerEvents: function () {
        var self = this;
        dispatcher.register(function (action) {
            //dispatcher.waitFor();
            /*switch (action.type) {
                case EventType.UI_OPEN_ROLE_FORM:
                    self.update(action.id);
                    self.handleToggle();
                    break;
                default:
                    break;
            }*/
        });
    },
});
