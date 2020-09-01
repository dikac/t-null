import NotNull from "../../../dist/assert/string/not-null";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

let data = new Map<[boolean, any, string?], string>();

data.set([true, 'null'], 'type is not null');
data.set([true, 'null', 'value'], 'value is not null');
data.set([true, []], 'type is not null');
data.set([true, {}], 'type is not null');

data.set([false, 'null'], 'type string must not null');
data.set([false, 'null', 'value'], 'value string must not null');
data.set([false, []], 'type object must not null');
data.set([false, {}], 'type object must not null');


let i = 0;
for(let [args, message] of data) {

    it(`test data[${i}]`, ()=>{

        expect(NotNull(...args)).toBe(message);

    });

    i++;
}
