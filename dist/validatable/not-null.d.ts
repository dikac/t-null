import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
export declare type Return<Msg, Argument> = Readonly<Validatable<false> & Message<Msg> & Value<null>> | Readonly<Validatable<true> & Message<Msg> & Value<Argument>>;
export default function NotNull<Msg, Argument>(value: Argument, message: (result: Readonly<Value<Argument> & Validatable>) => Msg): Return<Msg, Argument>;
