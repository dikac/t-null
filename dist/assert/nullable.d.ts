export default function Nullable<Alternative>(value: unknown, assert: (value: unknown) => asserts value is Alternative, error?: (value: unknown) => Error): asserts value is null | Alternative;
