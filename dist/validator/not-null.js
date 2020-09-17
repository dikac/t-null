import NotNullValidatable from "../validatable/not-null";
export default class NotNull {
    constructor(message) {
        this.message = message;
    }
    validate(value) {
        return NotNullValidatable(value, this.message);
    }
}
//# sourceMappingURL=not-null.js.map