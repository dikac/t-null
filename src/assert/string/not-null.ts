import Sentence from "@dikac/t-message/sentence";

const sentence = new Sentence(
    false,
    '',
    [
        'must not',
        'is not',
    ], 'null'
);

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
    subject : string = ''
) : string {

    sentence.valid = valid;
    sentence.subject = subject;
    return sentence.message;
}
