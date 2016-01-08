import * as React  from 'react';
import {default as BlockModal} from "../models/block";
import {openEditor, deleteBlock} from '../actions'

interface Props { model?: BlockModal, activeIcon?: string, inactiveIcon: string, isActive?: boolean, onClick: Function }

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
            content = (<a>{content}</a>);
        }
        return (content);
    }
};
