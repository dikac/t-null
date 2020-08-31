(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../string/not-null", "@dikac/t-function/new"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const not_null_1 = require("../string/not-null");
    const new_1 = require("@dikac/t-function/new");
    function NotNull(value, error = new_1.default(Error), subject = '') {
        return error(not_null_1.default(false, value, subject));
    }
    exports.default = NotNull;
});
//# sourceMappingURL=not-null.js.map