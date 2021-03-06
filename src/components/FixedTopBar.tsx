import * as React  from 'react';
import BlockModel from "../models/block";
import MenuItem from "./MenuItem";
import {Sticky, Grid, Col, AvgGrid} from 'amazeui-react';
import {openEditor, addBlock, deleteBlock, moveBlockUp, moveBlockDown} from '../actions'
interface Props { quillModel?: BlockModel, activeIcon?: string, inactiveIcon: string, isActive?: boolean, canMoveUp?: boolean, canMoveDown?: boolean }
let topbarStyle = {
    textAlign: "center",
    background: "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.2) 25%, rgba(255, 255, 255, 0.2) 75%, rgba(255, 255, 255, 0) 100%)",
    width: "100%",
    boxShadow: " 0 0 25px rgba(0, 0, 0, 0.1), inset 0 0 1px rgba(255, 255, 255, 0.6)",
    color: " rgba(0, 0, 0, 0.5)",
    visibility: "visible"
}
export default class FixedTopBar extends React.Component<Props, {}> {
    onClick = (callback?: any) => {
        if (this.props.isActive && callback) {
            callback();
        }
    }
    render() {
        topbarStyle.visibility = this.props.isActive ? "visible" : "hidden"
        var isIconActive = this.props.quillModel ? true : false;
        return (
            <Grid style={topbarStyle}>
                <Col sm={12} smOffset={0} md={4} mdOffset={4} lg={2} lgOffset={5}>
                    <Sticky top={0}>
                        <AvgGrid sm={5}>
                            <li><MenuItem activeIcon="am-icon-file-o" inactiveIcon="am-icon-file-o" tooltip={"new block"} isActive={true} onClick={() => this.onClick(addBlock(new BlockModel(0, ""))) }/></li>
                            <li><MenuItem activeIcon="am-icon-edit" inactiveIcon="am-icon-edit" tooltip={"edit"} isActive={isIconActive} onClick={() => this.onClick(openEditor(this.props.quillModel)) }/></li>
                            <li><MenuItem activeIcon="am-icon-remove" inactiveIcon="am-icon-remove" tooltip={"delete"} isActive={isIconActive} onClick={() => this.onClick(deleteBlock(this.props.quillModel)) }/></li>
                            <li><MenuItem activeIcon="am-icon-arrow-up" inactiveIcon="am-icon-arrow-up" tooltip={"move up"} isActive={this.props.canMoveUp} onClick={() => this.onClick(moveBlockUp(this.props.quillModel)) }/></li>
                            <li><MenuItem activeIcon="am-icon-arrow-down" inactiveIcon="am-icon-arrow-down" tooltip={"move down"} isActive={this.props.canMoveDown} onClick={() => this.onClick(moveBlockDown(this.props.quillModel)) }/></li>
                        </AvgGrid>
                    </Sticky>
                </Col>
            </Grid>
        )
    }
}
