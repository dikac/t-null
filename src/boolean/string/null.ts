export default function String(
    valid : boolean,
    value : unknown,
) : string {

    if(valid) {

        return `value is null`;

    } else {

        return `value is not null`;
    }
}
