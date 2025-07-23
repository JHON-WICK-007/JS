const name = "Manan";
const surname = "Vasani";

console.log(`Hello my name is ${name} ${surname}.`);

console.log(name.charAt(2));
console.log(name.indexOf('M'));
console.log(surname.slice(1, 4));

str = "  bbbb  ";
console.log(str.trim());

str = "Hello, World!";
console.log(str.replace('Hello', 'Hi'));

str1 = " hii,hello how are you";
console.log(str1.includes('hii'));
console.log(str1.includes('MANAN'));

console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log(str.concat(str1));