import NullType from "../string/null";
import New from "@dikac/t-function/new";
export default function Null(value, error = New(Error), subject = '') {
    return error(NullType(false, value, subject));
}
//# sourceMappingURL=null.js.map