import AssertNotNull from "../assert/not-null";
import NotNullError from "../assert/throwable/not-null";
export default function NotNull(value, error = NotNullError) {
    AssertNotNull(value, error);
    return value;
}
//# sourceMappingURL=not-null.js.map