import TypeNull from './null';
/**
 * check if value is null or delegate checking to given validator
 */
export default function Nullable<Alternative>(
    value : unknown,
    notnull : (value : unknown) => value is Alternative
) : value is Alternative|null {

    return TypeNull(value) || notnull(value);
}

