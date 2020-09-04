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
     * @param conversion
     */
    function Null(valid, value, subject = 'type', conversion = value => typeof value) {
        let sentence = sentences_is_1.default(valid);
        sentence.object.push('null');
        sentence.subject.push(subject);
        if (!valid) {
            sentence.subject.push(conversion(value));
        }
        return sentence.message;
    }
    exports.default = Null;
});
//# sourceMappingURL=null.js.map