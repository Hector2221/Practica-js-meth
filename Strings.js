// Write a JavaScript function to check whether an `input` is a string or not.
const input = prompt('Escribe una cadena');
if (isNaN(input)) {
  console.log("Es un string");
}else{
    console.log("Es un numero");
}

// Implement the slice method for returning the word “apples”.
let txt = "I eat apples the whole day";
console.log(txt.slice(6 , 12));

// Implement the correct String method for replacing the word “Hello” with the word “Hi”.
let txt1 = "Hello World";
console.log(txt1.replace("Hello","Hi"));

// Convert the txt value to uppercase.
let txt2 = "Hello World";
console.log(txt2.toUpperCase());

// Convert the txt value to lowercase.
let txt3 = "Hello World";
console.log(txt3.toLowerCase());
