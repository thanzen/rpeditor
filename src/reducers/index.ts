import { combineReducers } from 'redux'
import { default as EventType } from '../eventType';
import {default as Block} from '../models/block';
import {default as context} from '../context';
let content1 = "Rpeditor is a block editor based on quill.<br>React, Typescript and Redux are highly used in the code, and atom is the preferred IDE.<br>You can find source code in the <a href=\"https://github.com/thanzen/rpeditor\">github</a>";
let content2 = "Features:<br>*  WYSWYG<br>*  BLOCK<br>*  PEVIEW<br>*  RESPONSIVE<br>*  CHANGE BLOCK POSITION";
let content3 ="What I like?<br><img src=\"https://talks.golang.org/2014/readability/gopher-ok-no.png\"";
let initialState = {
    blocks: [new Block(1, content1), new Block(2, content2), new Block(3,content3)],
    showBlockEditor: false,
    selectedTab: 1,
    quillContent: "",
    quillBlock: null,
    canMoveUp: false,
    canMoveDown: false,
    isTopFixedBarActive: true
}

function indexOf(blocks: Block[] = [], block: Block) {
    let index = -1;
    for (let i = 0; i < blocks.length; i++) {
        if (block && blocks[i].id == block.id) {
            return i;
        }
    }
    return index;
}

function toggleBlockEditor(state: boolean = initialState.showBlockEditor, action) {
    switch (action.type) {
        case EventType.QUILL_OPEN:
            return true;
        case EventType.QUILL_CLOSE:
            return false;
        default:
            return state
    }
}

function selectTab(state: number = initialState.selectedTab, action) {
    if (action.type == EventType.QUILL_SELECT_TAB) {
        return action.key;
    }
    return state;
}


function setTopFixedBarVisibility(state: boolean = initialState.isTopFixedBarActive, action) {
    if (action.type == EventType.QUILL_SELECT_TAB) {
        if (action.key == 1) {
            return true;
        }
        return false;
    }
    return state;
}

function addBlock(state: Block[] = initialState.blocks, action) {
    if (action.block.id == 0) {
        if (!action.block.content) return state;
        action.block.id = state.reduce((maxId, block) => Math.max(maxId, block.id), -1) + 1;
    }
    return [...state, action.block];
}

function deleteBlock(state: Block[] = initialState.blocks, action) {
    return state.filter(block => block.id != action.block.id);
}

function changeQuillContent(state: string = "", action) {
    if (action.type == EventType.QUILL_CONTENT_CHANGE) {
        return action.content;
    }
    return state;
}

function submitBlockChange(state: Block[] = initialState.blocks, action) {
    if (action.type == EventType.QUILL_SUBMIT_CHANGE) {
        return state.map(block =>
            block.id === action.block.id ? new Block(block.id, action.block.content) : block
        );
    }
    return state;
}

function setQuillBlock(state: Block = null, action) {
    if (action.type == EventType.BLOCK_SELECTED) {
        return action.block;
    }
    return state;
}

function setMoveUp(state: boolean = false, action) {
    if (action.type == EventType.BLOCK_SELECTED) {
        let index = indexOf(context.store.getState().blocks, action.block);
        if (index <= 0) {
            return false;
        }
        return true;
    }
    return state;
}

function moveBlockUp(state: Block[] = initialState.blocks, action) {
    if (action.type == EventType.BLOCK_MOVE_UP) {
        let blocks: Block[] = [...context.store.getState().blocks];
        let index = indexOf(blocks, action.block);
        if (index > 0) {
            blocks.splice(index, 1);
            blocks.splice(index - 1, 0, action.block);
            return blocks;
        }
    }
    return state;
}

function moveBlockDown(state: Block[] = initialState.blocks, action) {
    if (action.type == EventType.BLOCK_MOVE_DOWN) {
        let blocks: Block[] = [...context.store.getState().blocks];;
        let index = indexOf(blocks, action.block);
        if (index < blocks.length - 1) {
            blocks.splice(index, 1);
            blocks.splice(index + 1, 0, action.block);
            return blocks;
        }
    }
    return state;
}

function setMoveDown(state: boolean = false, action) {
    if (action.type == EventType.BLOCK_SELECTED) {
        var index = indexOf(context.store.getState().blocks, action.block);
        if (index < 0 || index == context.store.getState().blocks.length - 1) {
            return false;
        }
        return true;
    }
    return state;
}

function mutateBlocks(state: Block[] = initialState.blocks, action) {
    if (!action.block) return state;
    switch (action.type) {
        case EventType.BLOCK_ADD:
            return addBlock(state, action);
        case EventType.BLOCK_DELTE:
            return deleteBlock(state, action);
        case EventType.QUILL_SUBMIT_CHANGE:
            return submitBlockChange(state, action);
        case EventType.BLOCK_MOVE_UP:
            return moveBlockUp(state, action);
        case EventType.BLOCK_MOVE_DOWN:
            return moveBlockDown(state, action);
        default:
            return state;
    }
}

const reducers = combineReducers({
    showBlockEditor: toggleBlockEditor,
    blocks: mutateBlocks,
    selectedTab: selectTab,
    quillBlock: setQuillBlock,
    quillContent: changeQuillContent,
    canMoveDown: setMoveDown,
    canMoveUp: setMoveUp,
    isTopFixedBarActive: setTopFixedBarVisibility
})

export default reducers
