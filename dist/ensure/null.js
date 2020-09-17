import AssertNull from "../assert/null";
import NullError from "../assert/throwable/null";
export default function Null(value, error = NullError) {
    AssertNull(value, error);
    return value;
}
//# sourceMappingURL=null.js.map