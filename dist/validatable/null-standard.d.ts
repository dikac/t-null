import Instance from "@dikac/t-validator/validatable/validatable";
import Return from "@dikac/t-validator/validatable/simple";
export default function NullStandard<Argument>(value: Argument): Return<unknown, Argument, null, Instance<unknown, string>>;
