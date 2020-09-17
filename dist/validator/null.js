import NullValidatable from "../validatable/null";
export default class Null {
    constructor(message) {
        this.message = message;
    }
    validate(value) {
        return NullValidatable(value, this.message);
    }
}
//# sourceMappingURL=null.js.map