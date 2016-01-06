"use strict";
var Context = (function () {
    function Context() {
    }
    Object.defineProperty(Context.prototype, "store", {
        get: function () {
            return this._store;
        },
        set: function (value) {
            this._store = value;
        },
        enumerable: true,
        configurable: true
    });
    return Context;
}());
;
var context = new Context();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = context;
