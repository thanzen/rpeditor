import { combineReducers } from 'redux'
import { default as EventType } from '../eventType';
import {default as Block} from '../models/block';
let content1 ="Rpeditor is a quill.js based block editor.</br>Rpeditor is written in typescript, therefore, any js files under src folder are not supposed to be modfied,</br>but ts or tsx files.</br>You can find source code in the <a href='https://github.com/thanzen/rpeditor'>github</a>";
let content2="Todo:</br>1. Support block level drag and drop.</br>2. Styling the application.(help wanted).</br><img src='http://i.cbc.ca/1.3163246.1437577968!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/robert-gonsalves-deep-dream.jpg'/>";
var initialState ={
    blocks: [new Block(1, content1),new Block(2, content2)],
    showBlockEditor:false,
    selectedTab : 1,
    quillContent:"",
    quillBlock:null
}

function toggleBlockEditor(state:boolean = initialState.showBlockEditor, action) {
  switch (action.type) {
    case EventType.QUILL_OPEN:
      return true;
    case EventType.QUILL_CLOSE:
      return false;
    default:
      return state
  }
}

function selectTab(state:number=initialState.selectedTab, action){
  if(action.type == EventType.QUILL_SELECT_TAB){
    return action.key;
  }
  return state;
}

function addBlock(state:Block[]=initialState.blocks, action) {
  if(action.block.id == 0){
    if(!action.block.content) return state;
    action.block.id = state.reduce((maxId,block)=>Math.max(maxId,block.id),-1) + 1;
  }
  return  [...state,action.block];
}

function deleteBlock(state:Block[]=initialState.blocks, action) {
  return state.filter(block=>block.id != action.block.id);
}

function changeQuillContent(state:string="", action){
  if(action.type == EventType.QUILL_CONTENT_CHANGE){
    return action.content;
  }
  return state;
}

function submitBlockChange(state:Block[]=initialState.blocks, action){
  if(action.type == EventType.QUILL_SUBMIT_CHANGE){
    return state.map(block =>
          block.id === action.block.id ? new Block(block.id,action.block.content):block
      );
  }
  return state;
}

function setQuillBlock(state:Block= null, action){
  if(action.type == EventType.BLOCK_SELECTED){
    return action.block;
  }
  return state;
}

function mutateBlocks(state:Block[]=initialState.blocks, action){
  if(!action.block) return state;
  switch (action.type) {
    case EventType.BLOCK_ADD:
      return addBlock(state,action);
    case EventType.BLOCK_DELTE:
      return deleteBlock(state,action);
    case EventType.QUILL_SUBMIT_CHANGE:
      return submitBlockChange(state,action);
    default:
      return state;
  }
}

const reducers = combineReducers({
  showBlockEditor: toggleBlockEditor,
  blocks: mutateBlocks,
  selectedTab:selectTab,
  quillBlock:setQuillBlock,
  quillContent: changeQuillContent
})

export default reducers
