import Null_ from "../../../dist/assert/string/null";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

let data = new Map<[boolean, any, string?], string>();

data.set([true, 'null'], 'type is null');
data.set([true, 'null', 'value'], 'value is null');
data.set([true, []], 'type is null');
data.set([true, {}], 'type is null');

data.set([false, 'null'], 'type string is not null');
data.set([false, 'null', 'value'], 'value string is not null');
data.set([false, []], 'type object is not null');
data.set([false, {}], 'type object is not null');


let i = 0;
for(let [args, message] of data) {

    it(`test data[${i}]`, ()=>{

        expect(Null_(...args)).toBe(message);

    });

    i++;
}
