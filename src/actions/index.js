"use strict";
var eventType_1 = require('../eventType');
var context_1 = require('../context');
function openEditor(block) {
    context_1.default.store.dispatch({ type: eventType_1.default.QUILL_OPEN });
    context_1.default.store.dispatch({ type: eventType_1.default.BLOCK_SELECTED, block: block });
    context_1.default.store.dispatch({ type: eventType_1.default.QUILL_CONTENT_CHANGE, content: block.content });
}
exports.openEditor = openEditor;
function closeEditor() {
    context_1.default.store.dispatch({ type: eventType_1.default.QUILL_CLOSE });
    context_1.default.store.dispatch({ type: eventType_1.default.QUILL_CONTENT_CHANGE, content: "" });
}
exports.closeEditor = closeEditor;
function submitChange(block) {
    context_1.default.store.dispatch({ type: eventType_1.default.QUILL_SUBMIT_CHANGE, block: block });
    closeEditor();
}
exports.submitChange = submitChange;
function selectTab(key) {
    if (key === void 0) { key = 1; }
    context_1.default.store.dispatch({ type: eventType_1.default.QUILL_SELECT_TAB, key: key });
}
exports.selectTab = selectTab;
function addBlock(block) {
    context_1.default.store.dispatch({ type: eventType_1.default.BLOCK_ADD, block: block });
    context_1.default.store.dispatch({ type: eventType_1.default.QUILL_OPEN });
    context_1.default.store.dispatch({ type: eventType_1.default.BLOCK_SELECTED, block: block });
}
exports.addBlock = addBlock;
function deleteBlock(block) {
    context_1.default.store.dispatch({ type: eventType_1.default.BLOCK_DELTE, block: block });
}
exports.deleteBlock = deleteBlock;
function changeQuillContent(content) {
    context_1.default.store.dispatch({ type: eventType_1.default.QUILL_CONTENT_CHANGE, content: content });
}
exports.changeQuillContent = changeQuillContent;