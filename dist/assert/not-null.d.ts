import { Union } from "ts-toolbelt";
export default function NotNull<Type>(value: Type, error?: (value: unknown) => Error): asserts value is Union.Exclude<Type, null>;
