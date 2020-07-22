import Null from "./null";
import UndefinedMessage from "../validatable/string/null";

export default function NullStandard() : Null<string> {

    return new Null(UndefinedMessage)
}
