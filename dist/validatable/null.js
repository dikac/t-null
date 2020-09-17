import Callback from "@dikac/t-validator/validatable/callback-function";
import NullGuard from "../boolean/null";
export default function Null(value, message) {
    return Callback(value, NullGuard, message);
}
//# sourceMappingURL=null.js.map