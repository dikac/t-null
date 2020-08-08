(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./not-null", "../validatable/string/not-null"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const not_null_1 = require("./not-null");
    const not_null_2 = require("../validatable/string/not-null");
    function NotNullStandard() {
        return new not_null_1.default(not_null_2.default);
    }
    exports.default = NotNullStandard;
});
//# sourceMappingURL=not-null-standard.js.map