import SentencesIs from "@dikac/t-string/message/sentences-is";

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
    sentence.predicate =  {
        invalid : ['must not'],
        valid : ['is not'],
    };
    sentence.object.push('null');
    sentence.subject.push(subject);

    if(!valid) {

        sentence.subject.push(conversion(value));
    }

    return sentence.message;
}
