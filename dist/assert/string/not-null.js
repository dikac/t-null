(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-message/sentence"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const sentence_1 = require("@dikac/t-message/sentence");
    const sentence = new sentence_1.default(false, '', {
        invalid: 'must not',
        valid: 'is not',
    }, 'null');
    /**
     * string intended for not null message
     *
     * @param valid
     * @param value
     * @param subject
     */
    function NotNull(valid, value, subject = '') {
        sentence.valid = valid;
        sentence.subject = subject;
        return sentence.message;
    }
    exports.default = NotNull;
});
//# sourceMappingURL=not-null.js.map