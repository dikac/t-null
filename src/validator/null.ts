import Validator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import NullValidatable from "../validatable/null";
import Instance from "@dikac/t-validator/validatable/validatable";
import Return from "@dikac/t-validator/validatable/simple";

export default class Null<MessageType>
    implements
        Validator<unknown, null, Readonly<Instance<unknown, MessageType>>>,
        Message<(result:Readonly<Value & Validatable>)=>MessageType>
{

    constructor(
       public message : (result:Readonly<Value & Validatable>)=>MessageType
    ) {
    }

    validate<Argument extends null>(value: Argument) : Readonly<Instance<Argument, MessageType, true>>
    validate<Argument extends unknown>(value: Argument) : Return<unknown, Argument, null, Readonly<Instance<unknown, MessageType>>>
    validate<Argument extends unknown>(value: Argument) {

        return <Return<unknown, Argument, null, Readonly<Instance<unknown, MessageType>>>> NullValidatable(value, this.message);
    }
}
