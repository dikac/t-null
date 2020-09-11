import Null_ from "../../../dist/assert/string/null";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

let data = new Map<[boolean, any, string?], string>();

it('true', ()=>{

    expect(Null_(true, {}, 'value')).toBe(
        'value is null.'
    );

});

it('false', ()=>{

    expect(Null_(false, {}, 'value')).toBe(
        'value must null, actual object.'
    );

});
