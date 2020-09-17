import NotNullType from "../string/not-null";
import New from "@dikac/t-function/new";
export default function NotNull(value, error = New(Error), subject = '') {
    return error(NotNullType(false, value, subject));
}
//# sourceMappingURL=not-null.js.map