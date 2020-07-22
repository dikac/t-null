(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../validatable/null"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const null_1 = require("../validatable/null");
    class Null {
        constructor(message) {
            this.message = message;
        }
        validate(value) {
            return null_1.default(value, this.message);
        }
    }
    exports.default = Null;
});
//# sourceMappingURL=null.js.map