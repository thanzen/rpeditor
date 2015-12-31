import {default as eventType} from '../eventType';
import {default as context} from '../context';
import {default as Block} from '../models/block';

/*
 * action creators
 */
export function openEditor(block:Block) {
  context.store.dispatch({ type: eventType.QUILL_OPEN});
  context.store.dispatch({ type: eventType.BLOCK_SELECTED, block:block});
  context.store.dispatch({ type: eventType.QUILL_CONTENT_CHANGE, content:block.content});
}

export function closeEditor() {
  context.store.dispatch({ type: eventType.QUILL_CLOSE});
  context.store.dispatch({ type: eventType.QUILL_CONTENT_CHANGE, content:""});
}

export function submitChange(block:Block) {
  context.store.dispatch({ type: eventType.QUILL_SUBMIT_CHANGE, block:block});
  closeEditor();
}

export function selectTab(key:number = 1){
  context.store.dispatch({ type: eventType.QUILL_SELECT_TAB, key:key});
}

export function addBlock(block:Block) {
  context.store.dispatch({ type: eventType.BLOCK_ADD, block:block});
  context.store.dispatch({ type: eventType.QUILL_OPEN});
  context.store.dispatch({ type: eventType.BLOCK_SELECTED, block:block});
}

export function deleteBlock(block:Block) {
  context.store.dispatch({ type: eventType.BLOCK_DELTE, block:block});
}

export function changeQuillContent(content:string){
  context.store.dispatch({ type: eventType.QUILL_CONTENT_CHANGE, content:content});
}