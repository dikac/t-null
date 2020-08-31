import NullType from "../string/null";
import New from "@dikac/t-function/new";

export default function Null(
    value : unknown,
    error : (string : string)=>Error = New(Error),
    subject : string = ''
) : Error {

    return error(NullType(false, value, subject))
}
