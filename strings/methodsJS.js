// * console.log("hello");
//? console.log(3 + 3);
// console.log(3);

//null => It is a standalone value and datatype and its a representation value , suppose aapne wweather app create kiya
// then u requested that mujhe temprature batao then if there is any dikkat in server then it sends Zero 0 then it is not good so there
//i can use null
// undefined => It is also a  type
//? console.log("Sagar");

const name = "Akash"

const number = 50

// console.log(name + number);
// In todays world it is outdated syntax so we use bacticks
// so we write like this

/*console.log(
  `Hello this is printing using backticks which is String ${name} this is number ${number}`
);*/

const firstName = new String('SagarBhadke');
// In this string is a object not an array
// console.log(firstName[0]);
console.log(firstName.length)
console.log(firstName.toLowerCase())
// console.log(firstName.\\\\\\\\\\\)
const newString = firstName.substring(2,5)
console.log(newString)

const anotherString = firstName.slice(0,2
    )
console.log(anotherString)

const newStringFor = "   My Name is Sagar   /"

console.log(newStringFor.trim());

const newStringFor1 = "   My Name is Sagar   /"

console.log(newStringFor1);


//?Number and Maths in JS.

// lets take a variable score
const score = 400;
console.log(score);

// Now create the Object

const objNumber = new Number(100);
console.log(objNumber);
//* here it has created the objct of wwhich has key and Value

//* We can use the String methods also here to convert it to string

console.log(objNumber.toString())//? So we can create the object to string

//toString()
//*toFixed() ---> This method we mostly use in ecommerce websites to need a precision value.

console.log(objNumber.toFixed(3))
// console.log(objNumber.toFixed(50))

//*toPrecision
const anotherNumber = 12.2
console.log(anotherNumber.toPrecision(2)); //124
console.log(anotherNumber.toPrecision(4));//123.9

//*toLocaleString --->  it actually converts the hundreds into your local value currency 



const localCurrency = 10540000;
// console.log(localCurrency.toLocaleString()); //* By default it converts the local cuurency but it is US
// so we can use like Bharat also.
console.log(localCurrency.toLocaleString('en-IN'))

//? Methods for DSA 
// * Like min Vaule 5e-324
//*  and max Value  1.7976931348623157e+308
//* Safe integer its means Itna hi value store kar sakta hu MAX_SAFE_INETGER

//?++++++++++++++++++++++*****MATHS*****+++++++++++++++++++++++++++++++++

console.log(Math)//* Its a Object and it has more properties

// But when it comes to the inspect in Browser it has more propeties we can see there
//*.abs() --> method, We use this method for the perpose where sometime we get the negative value and for that
// we can use Math.abs() like convert the neg value to positive - to +

console.log(Math.abs(-5)); //5

//*.round --> It round off the value

const roundOffValue = 123.145;
console.log(Math.round(roundOffValue)) // 123

//*ceil() --> in this method it chooses the top value like if value is 4.1 then it chooses 5

console.log(Math.ceil(roundOffValue)) //124

//* floor() --> In this method it will take the floor value means if have 4.5 then it will take 4

console.log(Math.floor(roundOffValue))//123

//* Math.random() ---> It will always have value between 0 and 1
// but suppose we have to make a game where we get the value for dice that is 1 - 6 
console.log(Math.random()) 
console.log(Math.random()*10) // This will shift my one digit to right
//? In some cases we get the value like 0.01445659789
//* To avoid this we add one digit to it +1
console.log(Math.random()*10 + 1) // *But this is not good practice where it can lead to apply BODMAS we simply add bracket

console.log((Math.random()*10) + 1)

//we can get the floor value also
console.log(Math.floor(Math.random()*10 + 1))

// Now I want min and max value of my choice then we have one formula

const min = 10;
const max = 20;
console.log(Math.floor(
                       Math.random() * (max - min * 1)
                      ) 
  + min); // we have added +1 to avoid 0 cases like above and added min at the end to say that we want this much minimum
