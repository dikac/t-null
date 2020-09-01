(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-string/message/sentences-is"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const sentences_is_1 = require("@dikac/t-string/message/sentences-is");
    /**
     * string intended for null message
     *
     * @param valid
     * @param value
     * @param subject
     */
    function Null(valid, value, subject = 'type', conversion = value => typeof value) {
        let sentence = new sentences_is_1.default(valid);
        sentence.type.push('null');
        sentence.value.push(subject);
        if (!valid) {
            sentence.value.push(conversion(value));
        }
        return sentence.message;
    }
    exports.default = Null;
});
//# sourceMappingURL=null.js.map