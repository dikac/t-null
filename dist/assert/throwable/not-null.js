(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../boolean/string/not-null"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const not_null_1 = require("../../boolean/string/not-null");
    function NotNull(value) {
        return new Error(not_null_1.default(false, value));
    }
    exports.default = NotNull;
});
//# sourceMappingURL=not-null.js.map