import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import UndefinedMessage from "../../boolean/string/null";

export default function Null(object : Readonly<Value & Validatable>) : string {

    return UndefinedMessage(object.valid, object.value)
}
