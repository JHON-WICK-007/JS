const arrowsum = (a, b) => {
   return a + b;
}
console.log(arrowsum(3, 5)); // Output: 8

const hello = () => console.log("Hello");
console.log(hello());

let arr = [1, 2, 3, 4, 5];
arr.forEach((element, idx, arr) => {
    console.log(element, idx, arr);
});

let num = [1, 2, 3, 4, 5];
let number = num.map((val) => {
    return val * 10;
});
console.log(number)

let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let filter = num1.filter((val) => {
    return val > 5;
});
console.log(filter)

let mark = [1, 2, 3, 4];
let sum = mark.reduce((acc, cur) => {
    return acc + cur;
})
console.log(sum)