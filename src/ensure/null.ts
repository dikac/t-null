import Function from "@dikac/t-function/function";
import AssertNull from "../assert/null";
import NullError from "../assert/throwable/null";

export default function Null(
    value : unknown,
    error : Function<[unknown], Error> = NullError
) : null {

    AssertNull(value, error);

    return value;
}
