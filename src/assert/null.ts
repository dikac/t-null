import Guard from "../boolean/null";
import Callback from "@dikac/t-function/assert/callback";
import NullError from "./throwable/null";

export default function Null(
    value : unknown,
    error : (value:unknown)=>Error = NullError
) : asserts value is null {

    Callback(value, Guard, error);
}
