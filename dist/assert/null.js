(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/null", "@dikac/t-function/assert/callback", "./throwable/null"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const null_1 = require("../boolean/null");
    const callback_1 = require("@dikac/t-function/assert/callback");
    const null_2 = require("./throwable/null");
    function Null(value, error = null_2.default) {
        callback_1.default(value, null_1.default, error);
    }
    exports.default = Null;
});
//# sourceMappingURL=null.js.map