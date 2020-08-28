import Guard from "../boolean/null";

export default function Nullable<Alternative>(
    value : unknown,
    ensure : (value:unknown)=>Alternative,
    error ?: (value:unknown)=>Error
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
