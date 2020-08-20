(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../boolean/string/null"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const null_1 = require("../../boolean/string/null");
    function Null(value) {
        return new Error(null_1.default(false, value));
    }
    exports.default = Null;
});
//# sourceMappingURL=null.js.map