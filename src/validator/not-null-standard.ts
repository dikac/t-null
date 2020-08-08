import NotNull from "./not-null";
import NullMessage from "../validatable/string/not-null";

export default function NotNullStandard() : NotNull<string> {

    return new NotNull(NullMessage)
}
