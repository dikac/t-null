(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-value/message/callback", "../boolean/null"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const callback_1 = require("@dikac/t-value/message/callback");
    const null_1 = require("../boolean/null");
    function Null(value, message) {
        return callback_1.default(value, null_1.default, message);
    }
    exports.default = Null;
});
//# sourceMappingURL=null.js.map