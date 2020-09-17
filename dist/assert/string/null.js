import SentencesIs from "@dikac/t-string/message/sentences-must";
/**
 * string intended for null message
 *
 * @param valid
 * @param value
 * @param subject
 * @param conversion
 */
export default function Null(valid, value, subject = 'type', conversion = value => typeof value) {
    let sentence = SentencesIs(valid);
    sentence.expect.push('null');
    sentence.subject.push(subject);
    sentence.comma.push('expect');
    if (!valid) {
        sentence.actual.push('actual', conversion(value));
    }
    return sentence.message;
}
//# sourceMappingURL=null.js.map