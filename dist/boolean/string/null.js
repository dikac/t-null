(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function String(valid, value) {
        if (valid) {
            return `value is null`;
        }
        else {
            return `value is not null`;
        }
    }
    exports.default = String;
});
//# sourceMappingURL=null.js.map