import Validator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import NullValidatable from "../validatable/null";
import Instance from "@dikac/t-validator/validatable/validatable";
import Return from "@dikac/t-validator/validatable/simple";

export default class Null<MessageT>
    implements
        Validator<unknown, null, Readonly<Instance<unknown, MessageT>>>,
        Message<(result:Readonly<Value & Validatable>)=>MessageT>
{

    constructor(
       public message : (result:Readonly<Value & Validatable>)=>MessageT
    ) {
    }

    validate<Argument extends null>(value: Argument) : Readonly<Instance<Argument, MessageT, true>>
    validate<Argument extends unknown>(value: Argument) : Return<unknown, Argument, null, Readonly<Instance<unknown, MessageT>>>
    validate<Argument extends unknown>(value: Argument) {

        return <Return<unknown, Argument, null, Readonly<Instance<unknown, MessageT>>>> NullValidatable(value, this.message);
    }
}
