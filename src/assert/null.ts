import Guard from "../boolean/null";
import Fn from "@dikac/t-function/function";
import Callback from "@dikac/t-function/assert/callback";
import NumberError from "./throwable/null";

export default function Null(
    value : unknown,
    error : Fn<[unknown], Error> = NumberError
) : asserts value is null {

    Callback(value, Guard, error);
}
