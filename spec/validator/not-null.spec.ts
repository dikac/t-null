import Validator from "../../dist/validator/not-null";
import StringMessage from "../../dist/validatable/string/not-null";

it("enable console log", () => { spyOn(console, 'log').and.callThrough()});

describe(`compiler compatible`,function() {

    it(`valid value`,function() {

        let validator = new Validator(StringMessage);
        let validatable = validator.validate(<unknown>{});

        if(validatable.valid) {

            // compiler pass
            let string : unknown = validatable.value;
            expect(string).toEqual({});

        } else {

            let string : null = validatable.value;
            fail('validatable.valid should false')
        }
    });

    it(`invalid value`,function() {

        let validator = new Validator(StringMessage);
        let validatable = validator.validate(null);

        if(validatable.valid) {

            let string : null = validatable.value;
            fail('validatable.valid should false')

        } else {

            let string : null = validatable.value;
            expect(string).toEqual(null);
        }
    });

    it(`readonly`,function() {

        let validator = new Validator(StringMessage);
        let validatable = validator.validate('1');

        try {
            // @ts-expect-error
            validatable.valid = true;
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }

        // @ts-expect-error
        validatable.value = true;

        try {
            // @ts-expect-error
            validatable.message = 'message';
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }

    });
});


it(`valid`,function() {

    let validator = new Validator(StringMessage);
    let validatable = validator.validate(1);

    expect(validatable.valid).toBe(true);
    expect(validatable.value).toBe(1);
    expect(typeof validatable.message).toBe("string");
});

it(`invalid`,function() {

    let validator = new Validator(StringMessage);
    let validatable = validator.validate(null);

    expect(validatable.valid).toBe(false);
    expect(validatable.value).toBe(null);
    expect(typeof validatable.message).toBe("string");
});



