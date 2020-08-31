(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../string/null", "@dikac/t-function/new"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const null_1 = require("../string/null");
    const new_1 = require("@dikac/t-function/new");
    function Null(value, error = new_1.default(Error), subject = '') {
        return error(null_1.default(false, value, subject));
    }
    exports.default = Null;
});
//# sourceMappingURL=null.js.map