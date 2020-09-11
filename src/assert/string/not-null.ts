import SentencesIs from "@dikac/t-string/message/sentences-must";

/**
 * string intended for not null message
 *
 * @param valid
 * @param value
 * @param subject
 * @param conversion
 */
export default function NotNull(
    valid : boolean,
    value : unknown,
    subject : string = 'type',
    conversion : (value:unknown)=>string = value=>typeof value
) : string {

    let sentence = SentencesIs(valid);

    sentence.expect.push('null');
    sentence.reject = ['must not'];
    sentence.accept = ['is not'];
    sentence.subject.push(subject);

    // sentence.comma.push('expect');
    //
    // if(!valid) {
    //
    //     sentence.actual.push('actual', conversion(value));
    // }

    return sentence.message;
}
