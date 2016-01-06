import * as React  from 'react';
import {ModalTrigger,Modal,Button,Divider} from 'amazeui-react';
import  {default as BlockModal} from "../models/block";
import QuillComponent from "./quill/QEditor";
import  {default as eventType}  from "../eventType";
import {changeQuillContent, openEditor, closeEditor, submitChange} from "../actions";
interface Props { theme?: string, quillBlock?:BlockModal, showBlockEditor?:boolean, quillContent?: string , onOpen?:Function}
interface State {}
let dialogStyle = {
    width: '100%',
    height: '400px',
    textAlign:"left"
}
let hideStyle={
  display:'none'
}
let buttonStyle={
  width:"50%",
  height:"100%"
}
let modules={
  'image-tooltip':true
}

class Editor extends React.Component<Props, State> {
  static defaultProps:any
    constructor(props) {
        super(props);
    }
    refs:any;
    close = () => {
       closeEditor();

       //tod: remove this hack;
       this.refs.modal.props.onRequestClose();
    }

    onSubmit =()=>{
      var block =  new BlockModal(this.props.quillBlock.id,this.props.quillContent);
      submitChange(block);
         //tod: remove this hack;
      this.refs.modal.props.onRequestClose();
    }

    onTextChange = (value: string) => {
        changeQuillContent(value);
    }
     //tod: remove this hack;
    componentDidUpdate=(prevProps,prevState:any)=>{
      if(prevProps.showBlockEditor != this.props.showBlockEditor && this.props.showBlockEditor){
        this.refs.btnOpen.props.onClick();
      }
    }
    render() {
        var modal = (<Modal cancelText="Cancel" confirmText="OK" ref="modal" closeIcon={false}>
                        <div style={dialogStyle}>
                          <QuillComponent theme={this.props.theme} value={this.props.quillContent} onChange={this.onTextChange} modules={modules}></QuillComponent>
                        </div>
                        <Divider/>
                        <div>
                          <Button onClick={this.onSubmit} style={buttonStyle}>OK</Button>
                          <Button onClick={this.close} style={buttonStyle}>CANCEL</Button>
                        </div>
                    </Modal>);
        return (
              <ModalTrigger modal={modal}   onCancel={this.close} onConfirm={this.onSubmit}  modalWidth={"700px"}>
                <Button amStyle='primary' ref="btnOpen" style={hideStyle}>open</Button>
              </ModalTrigger>
            );
    }
};
export default Editor;
