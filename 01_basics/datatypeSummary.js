//primitive datatype
//7 types = string, number, boolean, null, undefined, symbol, BigInt.

let MyNumber = Symbol("1234");
let YourNumber = Symbol("1234");

// console.log(MyNumber == YourNumber);
// console.log(typeof MyNumber);
// console.log(typeof YourNumber);


let big = 487234666198472894n;
// console.log(typeof big);//bigint





// Reference (non-primitive)
// array, object, function;

let arr = ["iron_man", "spider_man", 5];
// console.log(arr);
// console.log(typeof arr);//object

let MyObj = {
    name : "nikhil",
    class : 12,
}

// console.log(MyObj);
// console.log(typeof MyObj);//object


let MyFunction = function(){
    console.log("hello me")
}
console.log(MyFunction);//not the right approach to call function.
console.log(typeof MyFunction);//function