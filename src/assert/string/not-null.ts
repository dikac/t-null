import SentencesIs from "@dikac/t-string/message/sentences-must";

/**
 * string intended for not null message
 *
 * @param valid
 * @param value
 * @param subject
 */
export default function NotNull(
    valid : boolean,
    value : unknown,
    subject : string = 'type',
) : string {

    let sentence = SentencesIs(valid);

    sentence.expect.push('null');
    sentence.reject = ['must not'];
    sentence.accept = ['is not'];
    sentence.subject.push(subject);

    return sentence.message;
}
