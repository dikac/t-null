import Null from "./null";
import NullMessage from "../validatable/string/null";

export default function NullStandard() : Null<string> {

    return new Null(NullMessage)
}
