export default function Nullable<Alternative>(value: unknown, ensure: (value: unknown) => Alternative, error?: (value: unknown) => Error): Alternative | null;
