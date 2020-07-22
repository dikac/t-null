/**
 * check if value is null or delegate checking to given validator
 */
export default function Nullable<Type>(value: unknown, notnull: (value: unknown) => value is Type): value is Type | null;
