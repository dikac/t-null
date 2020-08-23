import Guard from "../boolean/not-null";
import Fn from "@dikac/t-function/function";
import Callback from "@dikac/t-function/assert/callback";
import NotNullError from "./throwable/not-null";
import {Union} from "ts-toolbelt"

export default function NotNull<Type>(
    value : Type,
    error : Fn<[unknown], Error> = NotNullError
) : asserts value is Union.Exclude<Type, null> {

    Callback(value, Guard, error);
}
