import Function from "@dikac/t-function/function";
import FunctionSingle from "@dikac/t-function/function-single";
export default function Nullable<Alternative>(value: unknown, ensure: FunctionSingle<unknown, Alternative>, error?: Function<[unknown], Error>): Alternative | null;
