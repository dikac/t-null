import ValidatorAbstract from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
import Instance from "@dikac/t-validator/validatable/validatable";
import Return from "@dikac/t-validator/validatable/ambiguous";
export default class NotNull<Msg> implements ValidatorAbstract<unknown, null, true, false, Readonly<Instance<null, Msg>>>, Message<Function<[Readonly<Value> & Readonly<Validatable>], Msg>> {
    message: Function<[Readonly<Value & Validatable>], Msg>;
    constructor(message: Function<[Readonly<Value & Validatable>], Msg>);
    validate<Argument extends null>(value: Argument): Readonly<Instance<Argument, Msg, false>>;
    validate<Argument extends unknown>(value: Argument): Return<unknown, Argument, null, true, false, Readonly<Instance<Argument, Msg>>>;
}
