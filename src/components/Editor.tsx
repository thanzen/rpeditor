import * as React  from 'react';
import {Modal,Button} from 'react-bootstrap';
import disp = require("../dispatcher");
import  {default as BlockModal} from "../models/block";
import QuillComponent from "./quill/QEditor";
import {default as dispatcher}  from "../dispatcher";
import  {default as eventType}  from "../eventType";
interface Props { theme?: string, value?: string }
interface State { showModal?: boolean, value?: string }
let dialogStyle = {
    width: '100%',
    height: '400px'
}
let modules={
  'image-tooltip':true
}

class Editor extends React.Component<Props, State> {
    static defaultProps = { theme: "snow", value: "" }
    block: BlockModal;

    constructor(props) {
        super(props);
        this.state = { showModal: false, value: "" };
        this.registerEvents();
    }

    close = () => {
        this.setState({ showModal: false });
        this.block.content = this.state.value;
        dispatcher.dispatch({ type: eventType.QUILL_CLOSE, block: this.block });
    }

    open = () => {
        this.setState({ showModal: true });
    }

    onTextChange = (value: string) => {
        this.setState({ value: value });
    }

    render() {
        return (
            <Modal show={this.state.showModal} dialogClassName='rpeditor-quill-dialog' onHide={function(){}}>
                    <Modal.Header>
                      <Modal.Title>Blcok Editor</Modal.Title>
                    </Modal.Header>
                       <Modal.Body>
                    <div style={dialogStyle}>
                      <QuillComponent theme={this.props.theme} value={this.state.value} onChange={this.onTextChange} modules={modules} ></QuillComponent>
                    </div>
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
export default Editor;
