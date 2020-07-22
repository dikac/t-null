import Null, {Return} from "./null";
import UndefinedMessage from "./string/null";

export default function NullStandard<Argument>(
    value : Argument,
) : Return<string, Argument> {

    return Null<string, Argument>(value, UndefinedMessage);
}
