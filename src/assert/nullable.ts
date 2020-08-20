import Guard from "../boolean/null";
import Fn from "@dikac/t-function/function";
import Callback from "@dikac/t-function/assert/callback";
import NumberError from "./throwable/null";
import Assert from "@dikac/t-function/assert/assert";

export default function Nullable<Alternative>(
    value : unknown,
    assert : Assert<unknown, Alternative, []>,
    error ?: Fn<[unknown], Error>
) : asserts value is null|Alternative {

    try {

        if(!Guard(value)) {

            assert(value)
        }

    } catch (e) {

        if(error) {

            throw error(value)
        }

        throw e;
    }

}
