import Sentence from "@dikac/t-message/sentence";

const sentence = new Sentence(
    false,
    '',
    [
        'is not',
        'is',
    ], 'null'
);

/**
 * string intended for null message
 *
 * @param valid
 * @param value
 * @param subject
 */
export default function Null(
    valid : boolean,
    value : unknown,
    subject : string = ''
) : string {

    sentence.valid = valid;
    sentence.subject = subject;
    return sentence.message;
}
