//?Array
const myArray = [0,2,3,5,6];
console.log(myArray);

//there another way also
const myArray2 = new Array(0,1,2,5,3);
console.log(myArray2);
console.log(myArray2[5]);// undefined

//*Methods

//?    Push
//* It adds the value or push the value to the array
myArray.push(8);
console.log(myArray);

//?    unshift()
console.log("-----------This is unshift method---------------");
//* It inserts the value at the start of the array i.e. at 0th position index

myArray.unshift(214);// This is a value
console.log(myArray);

//?   shift() 
//There is a shift method where it removes the first index element its take example and we dont pass argument in shift method
console.log("-----------This is shift method---------------");//it removed the 214
myArray.shift();
console.log(myArray);
