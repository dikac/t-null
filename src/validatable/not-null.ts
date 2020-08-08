import Callback from "@dikac/t-validator/validatable/callback";
import NotNullBoolean from "../boolean/not-null";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";

export type Return<Msg, Argument> =
    Readonly<Validatable<false> & Message<Msg> & Value<null>> |
    Readonly<Validatable<true> & Message<Msg> & Value<Argument>>;

export default function NotNull<Msg, Argument>(
    value : Argument,
    message : Function<[Readonly<Value<Argument> & Validatable>], Msg>
) : Return<Msg, Argument> {

    return <Return<Msg, Argument>> Callback(value, NotNullBoolean, message);
}


