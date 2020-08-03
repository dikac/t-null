import Null from "./null";
import UndefinedMessage from "./string/null";
import Instance from "@dikac/t-validator/parameter/instance/instance";
import Return from "@dikac/t-validator/return/return";

export default function NullStandard<Argument>(
    value : Argument,
) : Return<unknown, Argument, null, Instance<unknown, string>> {

    return Null<string, Argument>(value, UndefinedMessage);
}
