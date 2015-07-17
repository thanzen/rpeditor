///<reference path="../../libs/typings/react.d.ts" />
///<reference path="../../libs/typings/react-quill.d.ts" />
/// <reference path="../../libs/typings/react-bootstrap.d.ts"/>
import * as React  from 'react';
import * as ReactQuill from 'react-quill';
import * as Modal from 'react-bootstrap/lib/Modal';
import * as Button from 'react-bootstrap/lib/Button';
import disp = require("../dispatcher");
import * as block_ from "../models/block";
var dispatcher = disp.Dispatcher;
var eventType = disp.EventType;
interface Props { theme?: string, value?: string }
interface State { showModal?: boolean, value?: string }
export class Editor extends React.Component<Props, State> {
    static defaultProps = { theme: "snow", value: "" }
    block: block_.Block;
    constructor(props) {
        super(props);
        this.state = { showModal: false, value: "" };
        this.registerEvents();
    }

    close = () => {
        this.setState({ showModal: false });
        this.block.content = this.state.value;
        dispatcher.dispatch({ type: eventType.QUILL_CLOSE,block:this.block });
    }

    open = () => {
        this.setState({ showModal: true });
    }

    onTextChange = (value: string) => {
        this.setState({ value: value });
    }

    render() {
        return (
            <Modal show={this.state.showModal} onHide={this.close }>
                    <Modal.Header closeButton>
                      <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <ReactQuill theme={this.props.theme} value={this.state.value} onChange={this.onTextChange}  />
                    </Modal.Body>
                    <Modal.Footer>
                      <Button onClick={this.close }>Close</Button>
                    </Modal.Footer>
            </Modal>
            );
    }
    registerEvents() {
        var self = this;
        dispatcher.register(function(action) {
            //dispatcher.waitFor();
            switch (action.type) {
                case eventType.QUILL_OPEN:
                    self.setState({ showModal: true, value: action.block.content });
                    self.block = action.block;
                default:
                    break;
            }
        });
    }
};
