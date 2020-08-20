import NullType from "../../boolean/string/null";

export default function Null(value : unknown) : Error {

    return new Error(NullType(false, value))
}
