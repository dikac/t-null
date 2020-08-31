(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../assert/string/not-null"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const not_null_1 = require("../../assert/string/not-null");
    function NotNull(object) {
        return not_null_1.default(object.valid, object.value);
    }
    exports.default = NotNull;
});
//# sourceMappingURL=not-null.js.map