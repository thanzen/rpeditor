import {default as eventType} from '../eventType';
import {default as context} from '../context';
import {default as Block} from '../models/block';

export function openEditor(block:Block) {
  context.store.dispatch({ type: eventType.QUILL_OPEN});
  setSelectedQuillBlock(block);
  context.store.dispatch({ type: eventType.QUILL_CONTENT_CHANGE, content:block.content});
}

export function setSelectedQuillBlock(block:Block){
    context.store.dispatch({ type: eventType.BLOCK_SELECTED, block:block});
}

export function closeEditor() {
  context.store.dispatch({ type: eventType.QUILL_CLOSE});
  context.store.dispatch({ type: eventType.QUILL_CONTENT_CHANGE, content:""});
}

export function submitChange(block:Block) {
  if(block.id == 0){
      context.store.dispatch({ type: eventType.BLOCK_ADD, block:block});
  }
  context.store.dispatch({ type: eventType.QUILL_SUBMIT_CHANGE, block:block});
  closeEditor();
    setSelectedQuillBlock(block);
}

export function selectTab(key:number = 1){
  context.store.dispatch({ type: eventType.QUILL_SELECT_TAB, key:key});
}

export function addBlock(block:Block) {
  openEditor(block);
}

export function deleteBlock(block:Block) {
  context.store.dispatch({ type: eventType.BLOCK_DELTE, block:block});
}

export function changeQuillContent(content:string){
  context.store.dispatch({ type: eventType.QUILL_CONTENT_CHANGE, content:content});
}

export function moveBlockUp(block:Block){
    context.store.dispatch({ type: eventType.BLOCK_MOVE_UP, block:block});
    setSelectedQuillBlock(block);
}

export function moveBlockDown(block:Block){
    context.store.dispatch({ type: eventType.BLOCK_MOVE_DOWN, block:block});
    setSelectedQuillBlock(block);
}
