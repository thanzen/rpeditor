"use strict";
var redux_1 = require('redux');
var eventType_1 = require('../eventType');
var block_1 = require('../models/block');
var context_1 = require('../context');
var content1 = "Rpeditor is a quill.js based block editor.</br>Rpeditor is written in typescript, therefore, any js files under src folder are not supposed to be modfied,</br>but ts or tsx files.</br>You can find source code in the <a href='https://github.com/thanzen/rpeditor'>github</a>";
var content2 = "Todo:</br>1. Support block level drag and drop.</br>2. Styling the application.(help wanted).</br><img src='http://i.cbc.ca/1.3163246.1437577968!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/robert-gonsalves-deep-dream.jpg'/>";
var initialState = {
    blocks: [new block_1.default(1, content1), new block_1.default(2, content2)],
    showBlockEditor: false,
    selectedTab: 1,
    quillContent: "",
    quillBlock: null,
    canMoveUp: false,
    canMoveDown: false
};
function indexOf(blocks, block) {
    if (blocks === void 0) { blocks = []; }
    var index = -1;
    for (var i = 0; i < blocks.length; i++) {
        if (blocks[i].id == block.id) {
            return i;
        }
    }
    return index;
}
function toggleBlockEditor(state, action) {
    if (state === void 0) { state = initialState.showBlockEditor; }
    switch (action.type) {
        case eventType_1.default.QUILL_OPEN:
            return true;
        case eventType_1.default.QUILL_CLOSE:
            return false;
        default:
            return state;
    }
}
function selectTab(state, action) {
    if (state === void 0) { state = initialState.selectedTab; }
    if (action.type == eventType_1.default.QUILL_SELECT_TAB) {
        return action.key;
    }
    return state;
}
function addBlock(state, action) {
    if (state === void 0) { state = initialState.blocks; }
    if (action.block.id == 0) {
        if (!action.block.content)
            return state;
        action.block.id = state.reduce(function (maxId, block) { return Math.max(maxId, block.id); }, -1) + 1;
    }
    return state.concat([action.block]);
}
function deleteBlock(state, action) {
    if (state === void 0) { state = initialState.blocks; }
    return state.filter(function (block) { return block.id != action.block.id; });
}
function changeQuillContent(state, action) {
    if (state === void 0) { state = ""; }
    if (action.type == eventType_1.default.QUILL_CONTENT_CHANGE) {
        return action.content;
    }
    return state;
}
function submitBlockChange(state, action) {
    if (state === void 0) { state = initialState.blocks; }
    if (action.type == eventType_1.default.QUILL_SUBMIT_CHANGE) {
        return state.map(function (block) {
            return block.id === action.block.id ? new block_1.default(block.id, action.block.content) : block;
        });
    }
    return state;
}
function setQuillBlock(state, action) {
    if (state === void 0) { state = null; }
    if (action.type == eventType_1.default.BLOCK_SELECTED) {
        return action.block;
    }
    return state;
}
function setMoveUp(state, action) {
    if (state === void 0) { state = false; }
    if (action.type == eventType_1.default.BLOCK_SELECTED) {
        var index = indexOf(context_1.default.store.getState().blocks, action.block);
        if (index <= 0) {
            return false;
        }
        return true;
    }
    return state;
}
function setMoveDown(state, action) {
    if (state === void 0) { state = false; }
    if (action.type == eventType_1.default.BLOCK_SELECTED) {
        var index = indexOf(context_1.default.store.getState().blocks, action.block);
        if (index == context_1.default.store.getState().blocks.length - 1) {
            return false;
        }
        return true;
    }
    return state;
}
function mutateBlocks(state, action) {
    if (state === void 0) { state = initialState.blocks; }
    if (!action.block)
        return state;
    switch (action.type) {
        case eventType_1.default.BLOCK_ADD:
            return addBlock(state, action);
        case eventType_1.default.BLOCK_DELTE:
            return deleteBlock(state, action);
        case eventType_1.default.QUILL_SUBMIT_CHANGE:
            return submitBlockChange(state, action);
        default:
            return state;
    }
}
var reducers = redux_1.combineReducers({
    showBlockEditor: toggleBlockEditor,
    blocks: mutateBlocks,
    selectedTab: selectTab,
    quillBlock: setQuillBlock,
    quillContent: changeQuillContent,
    canMoveDown: setMoveDown,
    canMoveUp: setMoveUp
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = reducers;
