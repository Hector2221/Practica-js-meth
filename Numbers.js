// Call a method on that variable that turns the number into a string.
const n1 = 90;
const n1String = String(n1)
console.log(typeof n1String + " " + n1String);

// Call a method on that variable that turns the string into a number.
const n1Number = Number(n1String)
console.log(typeof n1Number + " " + n1Number);

// Call a method on that variable 90 gets length 15.
console.log(n1.toPrecision(15));

// Call a method on that variable 90 gets 4 decimals.
console.log(n1.toFixed(4));