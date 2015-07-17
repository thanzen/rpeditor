///<reference path="../libs/typings/flux.d.ts" />
import flux = require("flux");
export var Dispatcher = new flux.Dispatcher<any>();
export var EventType = {
    //quill related event types
    QUILL_OPEN: "QUILL_OPEN",
    QUILL_CLOSE:"QUILL_CLOSE",

    //block realted event types
    BLOCK_ADD:"BLOCK_ADD",
    BLOCK_DELTE:"BLOCK_DELETE"
}
