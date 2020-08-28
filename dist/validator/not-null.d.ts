import ValidatorAbstract from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import Instance from "@dikac/t-validator/validatable/validatable";
import Return from "@dikac/t-validator/validatable/ambiguous";
export default class NotNull<Msg> implements ValidatorAbstract<unknown, null, true, false, Readonly<Instance<null, Msg>>>, Message<(result: Readonly<Value> & Readonly<Validatable>) => Msg> {
    message: (result: Readonly<Value & Validatable>) => Msg;
    constructor(message: (result: Readonly<Value & Validatable>) => Msg);
    validate<Argument extends null>(value: Argument): Readonly<Instance<Argument, Msg, false>>;
    validate<Argument extends unknown>(value: Argument): Return<unknown, Argument, null, true, false, Readonly<Instance<Argument, Msg>>>;
}
