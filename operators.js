// for exponentiation we have to declare like this 2^3 = 2**3
console.log(2**3); // 8

a = 4;
console.log(a+=1); // a = a + 1
console.log(a-=1); // a = a - 1
console.log(a*=1); // a = a * 1
console.log(a/=1); // a = a / 1
console.log(a%=1); // a = a % 1
console.log(a**=1); // a = a ** 1

let data = 4;
let b = "4";   
console.log(data == 4);   // ✅ true — value comparison only
console.log(data != 1);   // ✅ true — 4 is not equal to 1
console.log(data === b);  // ❌ false — 4 (number) !== "4" (string)
console.log(data !== b);  // ✅ true — different **type** and **value**, so it's true

// == checks only for value, not type
console.log(data == 4);   // true → both are numbers and equal
console.log(data == b);   // true → 'b' is string, but value is same so type is ignored

// != checks only for value, not type
console.log(data != 1);   // true → 4 is not equal to 1
console.log(data != b);   // false → values are same, type is ignored

// === checks for both value and type
console.log(data === b);  // false → value is same, but types (number vs string) are different

// !== checks for both value and type
console.log(data !== b);  // true → value is same, but types differ (number !== string)

let num = "33";
console.log(Number(num));
let str = "33abc";
console.log(Number(str));
let t = true
console.log(Number(t)); 
let f = false
console.log(Number(f)); 
let n = null
console.log(Number(null)); 
let u = undefined
console.log(Number(u)); 
// Number conversion
// "33" => 33
// "33abc" => NaN
// true => 1, false => 0, null => 0, undefined => NaN, "" => false, "abc" => NaN

let bool = 1;
console.log(Boolean(bool));
// 1 => true, 0 => false, null => false, undefined => false

console.log("1" + 2);       
// Output: "12"
// Explanation: "1" is a string, so 2 is converted to a string and concatenated → "1" + "2" = "12"

console.log(1 + "2");       
// Output: "12"
// Explanation: 1 is a number, "2" is a string → number is coerced into string → "1" + "2" = "12"

console.log("1" + 2 + 2);   
// Output: "122"
// Explanation: "1" + 2 = "12" (string), then "12" + 2 = "122"

console.log(1 + 2 + "2");   
// Output: "32"
// Explanation: 1 + 2 = 3 (number), then 3 + "2" = "32" (3 is converted to string and concatenated)