// <<<<<<< HEAD
// //?Array
// const myArray = [0,2,3,5,6];
// console.log(myArray);
// =======
//?Array
const myArray = [0,2,3,5,6];
console.log(myArray);
//Sagar
// >>>>>>> 8e980c03b2da62080e00bcceb383bc8ee4cdc986

//there another way also
// const myArray2 = new Array(0,1,2,5,3);
// console.log(myArray2);
// console.log(myArray2[5]);// undefined

// //*Methods

// //?    Push
// //* It adds the value or push the value to the array
// myArray.push(8);
// console.log(myArray);

// //?    unshift()
// console.log("-----------This is unshift method---------------");
// //* It inserts the value at the start of the array i.e. at 0th position index

// myArray.unshift(214);// This is a value
// console.log(myArray);

// //?   shift() 
 //There is a shift method where it removes the first index element its take example and we dont pass argument in shift method
// console.log("-----------This is shift method---------------");//it removed the 214
// myArray.shift();
// console.log(myArray);

//? typeof and type conversion //* Right side to left side
// var varq = "asa";
// let no = Number(varq);
// console.log(typeof no);
// console.log(no);

//* Arrow Functions

let add = (a,b) => a+b;

console.log(add(1,3));

//? If we want to use {} curely braces then we need to use explicitly return
//?Arrow functions are handy for simple actions, especially for one-liners. They come in two flavors:

//? Without curly braces: (...args) => expression – the right side is an expression: the function evaluates it and returns the result. Parentheses can be omitted, if there’s only a single argument, e.g. n => n*2.
//? With curly braces: (...args) => { body } – brackets allow us to write multiple statements inside the function, but we need an explicit return to return something.