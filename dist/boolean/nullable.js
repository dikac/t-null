(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./null"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const null_1 = require("./null");
    /**
     * check if value is null or delegate checking to given validator
     */
    function Nullable(value, notnull) {
        return null_1.default(value) || notnull(value);
    }
    exports.default = Nullable;
});
//# sourceMappingURL=nullable.js.map