import Nullable from "../../dist/boolean/nullable";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe('valid', () => {


    it("value", () => {

        expect(Nullable<Array<any>>([], Array.isArray )).toBe(true);
    });

    it("null", () => {

        expect(Nullable<Array<any>>(null, Array.isArray )).toBe(true);
    });

});

describe('invalid', () => {

    it("value", () => {

        expect(Nullable<Array<any>>(1, Array.isArray )).toBe(false);
    });

});


