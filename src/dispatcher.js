///<reference path="../libs/typings/flux.d.ts" />
var flux = require("flux");
exports.Dispatcher = new flux.Dispatcher();
exports.EventType = {
    QUILL_OPEN: "QUILL_OPEN",
    QUILL_CLOSE: "QUILL_CLOSE"
};
