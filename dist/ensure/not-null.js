(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../assert/not-null", "../assert/throwable/not-null"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const not_null_1 = require("../assert/not-null");
    const not_null_2 = require("../assert/throwable/not-null");
    function NotNull(value, error = not_null_2.default) {
        not_null_1.default(value, error);
        return value;
    }
    exports.default = NotNull;
});
//# sourceMappingURL=not-null.js.map