(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/not-null", "@dikac/t-function/assert/callback", "./throwable/not-null"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const not_null_1 = require("../boolean/not-null");
    const callback_1 = require("@dikac/t-function/assert/callback");
    const not_null_2 = require("./throwable/not-null");
    function NotNull(value, error = not_null_2.default) {
        callback_1.default(value, not_null_1.default, error);
    }
    exports.default = NotNull;
});
//# sourceMappingURL=not-null.js.map