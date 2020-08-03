import Instance from "@dikac/t-validator/parameter/instance/instance";
import Return from "@dikac/t-validator/return/return";
export default function NullStandard<Argument>(value: Argument): Return<unknown, Argument, null, Instance<unknown, string>>;
