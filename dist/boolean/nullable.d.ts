export default function Nullable<Type>(value: any, notnull: (value: any) => value is Type): value is Type | null;
