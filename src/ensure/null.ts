import AssertNull from "../assert/null";
import NullError from "../assert/throwable/null";

export default function Null(
    value : unknown,
    error : (value:unknown)=>Error = NullError
) : null {

    AssertNull(value, error);

    return value;
}
