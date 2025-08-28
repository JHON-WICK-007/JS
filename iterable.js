let myNumbers = {
  from: 1,   // starting number
  to: 5,     // ending number

  // Make this object iterable by defining [Symbol.iterator]
  [Symbol.iterator]() {
    let current = this.from; // start at "from"
    let end = this.to;       // stop at "to"

    // Return an iterator object with a next() method
    return {
      next() {
        if (current <= end) {
          // Return the next number and mark "done: false"
          return { value: current++, done: false };
        } else {
          // When no more numbers, mark "done: true" (loop stops)
          return { done: true };
        }
      }
    };
  }
};

// Use for...of to loop through our custom iterable
for (let num of myNumbers) {
  console.log(num);  // Prints: 1, 2, 3, 4, 5
}