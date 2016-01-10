import * as React  from 'react';
import BlockModal from "../models/block";
import {openEditor, deleteBlock} from '../actions'
import LinkTooltip from './LinkTooltip';

interface Props { model?: BlockModal, activeIcon?: string, inactiveIcon: string, isActive?: boolean, onClick: Function, tooltip?:string}

export default class MenuItem extends React.Component<Props, {}> {
    onClick = () => {
        if (this.props.isActive) {
            this.props.onClick(this.props.model);
        }
    }
    render() {
        var icon = this.props.isActive ? this.props.activeIcon : this.props.inactiveIcon;
        var content = <i className={icon + " am-icon-fw"} onClick={this.onClick}></i>;
        if (this.props.isActive) {
            content = (<LinkTooltip tooltip={this.props.tooltip}> {content}</LinkTooltip>);
        }
        return (content);
    }
};
