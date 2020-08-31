import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import NotNullMessage from "../../assert/string/not-null";

export default function NotNull(object : Readonly<Value & Validatable>) : string {

    return NotNullMessage(object.valid, object.value)
}
