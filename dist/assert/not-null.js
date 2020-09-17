import Guard from "../boolean/not-null";
import Callback from "@dikac/t-function/assert/callback";
import NotNullError from "./throwable/not-null";
export default function NotNull(value, error = NotNullError) {
    Callback(value, Guard, error);
}
//# sourceMappingURL=not-null.js.map