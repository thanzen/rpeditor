///<reference path="../libs/typings/flux.d.ts" />
import flux = require("flux");
export var Dispatcher = new flux.Dispatcher<any>();
export var EventType = {
    //quill related event types
    QUILL_OPEN: "QUILL_OPEN",
    QUILL_CLOSE:"QUILL_CLOSE"

}
