export default function NotNull(
    valid : boolean,
    value : unknown,
) : string {

    if(valid) {

        return `value is not null`;

    } else {

        return `value must not null`;
    }
}
