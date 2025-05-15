console.log("=======Implicit conversion to String=======");
result = '3' + 2;
console.log(`Given stmt: '3' + 2;         Result: ${result}:      Reason:1st entity is string so JS will convert 2nd into string and addition of both string is '32'`); // "32"

result = '3' + true;
console.log(`Given stmt: '3' + true;      Result: ${result}:   Reason:1st entity is string so JS will convert 2nd into string and addition of both string is '3true'`); // "3true"

result = '3' + undefined;
console.log(`Given stmt: '3' + undefined; Result: ${result}:   Reason:1st entity is string so JS will convert 2nd into string and addition of both string is '3undefined'`); // "3undefined"

result = '3' + null;
console.log(`Given stmt: '3' + null;      Result: ${result}:   Reason:1st entity is string so JS will convert 2nd into string and addition of both string is '3null'`); // "3null"

console.log("=======Implicit boolean conversion to Number=======");

result = '4' - true;
console.log(`Given stmt: '4' - true;         Result: ${result};      Reason: '4' is a string, but '-' operator will convert both entity to number. So '4' becomes 4, true becomes 1 so 4 - 1 = 3`); // 3

result = 4 + true;
console.log(`Given stmt: 4 + true;           Result: ${result};      Reason: true is implicitly converted to 1 so 4 + 1 = 5`); // 5

result = 4 + false;
console.log(`Given stmt: 4 + false;          Result: ${result};      Reason: false is implicitly converted to 0 so 4 + 0 = 4`); // 4


console.log("=======Implicit string conversion to Number=======");

result = '4' - '2';
console.log(`Given stmt: '4' - '2';          Result: ${result};      Reason: Both are strings, but '-' operator will convert both to number. So, 4 - 2 = 2`); // 2

result = '4' - 2;
console.log(`Given stmt: '4' - 2;            Result: ${result};      Reason: '4' is a string, 2 is a number. '-' operator will convert both to number. So, 4 - 2 = 2`); // 2

result = '4' * 2;
console.log(`Given stmt: '4' * 2;            Result: ${result};      Reason: '*' operator will convert both to number. '4' becomes 4, so 4 * 2 = 8`); // 8

result = '4' / 2;
console.log(`Given stmt: '4' / 2;            Result: ${result};      Reason: '/' operator will convert both to number. '4' becomes 4, so 4 / 2 = 2`); // 2


console.log("=======Undefined used with number ,boolean or null=======");

result = 4 + undefined;
console.log(`Given stmt: 4 + undefined;      Result: ${result};      Reason: undefined cannot be converted to a number, so 4 + undefined is NaN`); // NaN

result = 4 - undefined;
console.log(`Given stmt: 4 - undefined;      Result: ${result};      Reason: undefined cannot be converted to a number, so 4 - undefined is NaN`); // NaN

result = true + undefined;
console.log(`Given stmt: true + undefined;   Result: ${result};      Reason: true becomes 1, but undefined can't convert to number, so 1 + undefined = NaN`); // NaN

result = null + undefined;
console.log(`Given stmt: null + undefined;   Result: ${result};      Reason: null becomes 0, undefined is not a number → 0 + undefined = NaN`); // NaN


console.log("=======Explicit: Number, string, boolean to Numbers=======");

// string to number
result = Number('324');
console.log(`Given stmt: Number('324');         Result: ${result};      Reason: String '324' is a valid numeric string, so Number() syntax converts it to number 324`); // 324

result = Number('324e-1');
console.log(`Given stmt: Number('324e-1');      Result: ${result};      Reason: '324e-1' is (324 × 10⁻¹), so result is 32.4`); // 32.4

// boolean to number
result = Number(true);
console.log(`Given stmt: Number(true);          Result: ${result};      Reason: Boolean true is explicitly converted to number 1 using Number() syntax`); // 1

result = Number(false);
console.log(`Given stmt: Number(false);         Result: ${result};      Reason: Boolean false is explicitly converted to number 0 using Number syntax()`); // 0


console.log("=======Explicit: Invalid string to Numbers=======");

result = Number('hello');
console.log(`Given stmt: Number('hello');         Result: ${result};      Reason: 'hello' is not a valid number string, so Number() returns NaN`);

result = Number(undefined);
console.log(`Given stmt: Number(undefined);       Result: ${result};      Reason: undefined cannot be converted to a number, so Number() returns NaN`);

result = Number(NaN);
console.log(`Given stmt: Number(NaN);             Result: ${result};      Reason: NaN cannot convert into number using Number()`); 
