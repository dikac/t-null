(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../assert/null", "../assert/throwable/null"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const null_1 = require("../assert/null");
    const null_2 = require("../assert/throwable/null");
    function Null(value, error = null_2.default) {
        null_1.default(value, error);
        return value;
    }
    exports.default = Null;
});
//# sourceMappingURL=null.js.map