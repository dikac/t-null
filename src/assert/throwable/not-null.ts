import NotNullType from "../../boolean/string/not-null";

export default function NotNull(value : unknown) : Error {

    return new Error(NotNullType(false, value))
}
