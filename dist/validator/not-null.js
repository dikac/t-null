(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../validatable/not-null"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const not_null_1 = require("../validatable/not-null");
    class NotNull {
        constructor(message) {
            this.message = message;
        }
        validate(value) {
            return not_null_1.default(value, this.message);
        }
    }
    exports.default = NotNull;
});
//# sourceMappingURL=not-null.js.map