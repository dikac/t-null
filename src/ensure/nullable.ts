import Function from "@dikac/t-function/function";
import FunctionSingle from "@dikac/t-function/function-single";
import Guard from "../boolean/null";

export default function Nullable<Alternative>(
    value : unknown,
    ensure : FunctionSingle<unknown, Alternative>,
    error ?: Function<[unknown], Error>
) : Alternative|null {

    if(Guard(value)) {

        return value;
    }

    try {

        return ensure(value);

    } catch (e) {

        if(error) {

            throw error(value);
        }

        throw e;
    }
}
