import Guard from "../boolean/null";
import Callback from "@dikac/t-function/assert/callback";
import NumberError from "./throwable/null";

export default function Null(
    value : unknown,
    error : (value:unknown)=>Error = NumberError
) : asserts value is null {

    Callback(value, Guard, error);
}
