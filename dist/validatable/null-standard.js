(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./null", "./string/null"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const null_1 = require("./null");
    const null_2 = require("./string/null");
    function NullStandard(value) {
        return null_1.default(value, null_2.default);
    }
    exports.default = NullStandard;
});
//# sourceMappingURL=null-standard.js.map