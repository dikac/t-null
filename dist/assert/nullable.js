import Guard from "../boolean/null";
export default function Nullable(value, assert, error) {
    try {
        if (!Guard(value)) {
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
//# sourceMappingURL=nullable.js.map