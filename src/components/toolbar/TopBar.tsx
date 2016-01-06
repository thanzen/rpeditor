import * as React  from 'react';
import {default as BlockModal} from "../../models/block";
import {openEditor,deleteBlock} from '../../actions'
import {default as MenuItem} from "./MenuItem";
import  {Sticky} from 'amazeui-react';
interface Props { quillModel?: BlockModal,activeIcon?:string,inactiveIcon:string, isActive?:boolean}

export default class TopBar extends React.Component<Props, {}> {
  onClick=(callback?:Function)=>{
    if(this.props.isActive && callback){
      callback();
    }
  }
  render() {
    var icon = this.props.isActive?this.props.activeIcon:this.props.inactiveIcon;
    var isIconActive = this.props.quillModel ? true:false;
    return (
      <Sticky top={0}>
        <div>
          <MenuItem activeIcon="am-icon-file-o" inactiveIcon="am-icon-file-o" isActive={true} onClick={()=>this.onClick()}/>
          <MenuItem activeIcon="am-icon-edit" inactiveIcon="am-icon-edit" isActive={isIconActive} onClick={()=>this.onClick()}/>
          <MenuItem activeIcon="am-icon-remove" inactiveIcon="am-icon-remove" isActive={isIconActive} onClick={()=>this.onClick()}/>
          <MenuItem activeIcon="am-icon-arrow-up" inactiveIcon="am-icon-arrow-up" isActive={isIconActive} onClick={()=>this.onClick()}/>
          <MenuItem activeIcon="am-icon-arrow-down" inactiveIcon="am-icon-arrow-down" isActive={isIconActive} onClick={()=>this.onClick()}/>
        </div>
      </Sticky>

    )
  }
}
