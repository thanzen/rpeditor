import * as React  from 'react';
import {Modal,Button} from 'react-bootstrap';
import  {default as BlockModal} from "../models/block";
import QuillComponent from "./quill/QEditor";
import  {default as eventType}  from "../eventType";
import {changeQuillContent, openEditor, closeEditor, submitChange} from "../actions";
interface Props { theme?: string, quillBlock?:BlockModal, showBlockEditor?:boolean, quillContent?: string }
interface State {}
let dialogStyle = {
    width: '100%',
    height: '400px'
}
let modules={
  'image-tooltip':true
}

class Editor extends React.Component<Props, State> {
    constructor(props) {
        super(props);
    }

    close = () => {
       closeEditor();
    }

    onSubmit =()=>{
      var block =  new BlockModal(this.props.quillBlock.id,this.props.quillContent);
      submitChange(block);
    }

    onTextChange = (value: string) => {
        changeQuillContent(value);
    }

    render() {
        return (
            <Modal show={this.props.showBlockEditor} dialogClassName='rpeditor-quill-dialog' onHide={function(){}}>
              <Modal.Header>
                <Modal.Title>Blcok Editor</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div style={dialogStyle}>
                    <QuillComponent theme={this.props.theme} value={this.props.quillContent} onChange={this.onTextChange} modules={modules}></QuillComponent>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={this.onSubmit}>OK</Button>
                  <Button onClick={this.close}>CANCEL</Button>
                </Modal.Footer>
            </Modal>
            );
    }
};
export default Editor;
