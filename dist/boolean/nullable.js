import TypeNull from './null';
/**
 * check if value is null or delegate checking to given validator
 */
export default function Nullable(value, notnull) {
    return TypeNull(value) || notnull(value);
}
//# sourceMappingURL=nullable.js.map