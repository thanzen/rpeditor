import * as React  from 'react';
import {default as BlockModel} from "../models/block";
import {default as BlockContent} from "./BlockContent";
import {default as eventType}  from "../eventType";
import {setSelectedQuillBlock} from "../actions"
interface Props { model: BlockModel, quillBlockModel: BlockModel }

const boxStyle = {
    padding: "2px",
    border: "1px solid",
    margin: "0"
};

const selectedStyle = {
    background: "#3374C2"
}

const deSelectedStyle = {
    background: "white"
}


export default class Block extends React.Component<Props, {}> {
    isSelected = () => {
        return this.props.quillBlockModel && this.props.model.id == this.props.quillBlockModel.id;
    }
    render() {
        var selected = this.isSelected();
        let style = selected ? selectedStyle : deSelectedStyle;
        return (
            <div  className={"block"} style={style} onClick = {() => {
                setSelectedQuillBlock(selected ? null : this.props.model);
            } }>
                <BlockContent model = {this.props.model} boxStyle={boxStyle}/>
            </div>
        );
    }
};
