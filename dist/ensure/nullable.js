import Guard from "../boolean/null";
export default function Nullable(value, ensure, error) {
    if (Guard(value)) {
        return value;
    }
    try {
        return ensure(value);
    }
    catch (e) {
        if (error) {
            throw error(value);
        }
        throw e;
    }
}
//# sourceMappingURL=nullable.js.map