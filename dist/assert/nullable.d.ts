import Fn from "@dikac/t-function/function";
import Assert from "@dikac/t-function/assert/assert";
export default function Nullable<Alternative>(value: unknown, assert: Assert<unknown, Alternative, []>, error?: Fn<[unknown], Error>): asserts value is null | Alternative;
