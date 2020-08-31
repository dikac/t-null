import NotNullType from "../string/not-null";
import New from "@dikac/t-function/new";

export default function NotNull(
    value : unknown,
    error : (string : string)=>Error = New(Error),
    subject : string = ''
) : Error {

    return error(NotNullType(false, value, subject))
}
