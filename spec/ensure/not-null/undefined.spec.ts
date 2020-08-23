import NotNull from "../../../dist/ensure/not-null";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

it(`undefined `, () => {

    let value = undefined;
    expect(NotNull(value)).toBe(value);

});





