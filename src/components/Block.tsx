import * as React  from 'react';
import BlockModel from "../models/block";
import BlockContent from "./BlockContent";
import eventType  from "../eventType";
import {setSelectedQuillBlock} from "../actions"
interface Props { model: BlockModel, quillBlockModel: BlockModel }
interface State { isHover: boolean };

const boxStyle = {
    padding: "2px",
    border: "1px solid",
    margin: "0"
};

const selectedStyle = {
    background: "#C4C2B3",
    outline: "0px"
}

const deSelectedStyle = {
    background: "white",
    outline: "0px"
}

export default class Block extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = { isHover: false }
    }

    isSelected = () => {
        return this.props.quillBlockModel && this.props.model.id == this.props.quillBlockModel.id;
    }

    onMouseOver = () => {
        this.setState({ isHover: true });
    }

    onMouseOut = () => {
        this.setState({ isHover: false });
    }

    render() {
        var selected = this.isSelected();
        let style = selected ? selectedStyle : deSelectedStyle;
        style.outline = this.state.isHover ? "#333 solid 1px" : "0px"
        return (
            <div onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}  style={style} onClick = {() => {
                setSelectedQuillBlock(selected ? null : this.props.model);
            } }>
                <BlockContent model = {this.props.model} boxStyle={boxStyle}/>
            </div>
        );
    }
};
