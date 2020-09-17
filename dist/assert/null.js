import Guard from "../boolean/null";
import Callback from "@dikac/t-function/assert/callback";
import NullError from "./throwable/null";
export default function Null(value, error = NullError) {
    Callback(value, Guard, error);
}
//# sourceMappingURL=null.js.map