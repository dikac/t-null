(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/null"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const null_1 = require("../boolean/null");
    function Nullable(value, assert, error) {
        try {
            if (!null_1.default(value)) {
                assert(value);
            }
        }
        catch (e) {
            if (error) {
                throw error(value);
            }
            throw e;
        }
    }
    exports.default = Nullable;
});
//# sourceMappingURL=nullable.js.map