console.log("scope,hoisting, let,const,var coding questions..");



// intialization

var name_1;
name_1 = "dhiru";
var name = "dheeraj upadhyay";
var name = "dheeraj rockstar"; // reintialization and redeclared is fine in var


let isPossible;
isPossible = "yes";
// let isPossible  // redeclared is not possible in let it gives error

const hello = "hii js"; /* redeclared and reinitialized and declaration of variable and initialized in the same line is required 
  it gives error
*/


function FineShadowing()
{
    var a = 10; // this is fine shadowing

    if(1)
    {
        let a = 11; // this is fine shadowing
        console.log(a);
    }

    console.log(a);
}

FineShadowing();

// illegal shadowing

// function illegalShadowing()
// {
//     let b = 25; // illegal shadowing
//     if(0)
//     {
//         var b = 25; // illegal shadowing
//     }

// }

console.log(fullName);

var fullName = "dheeraj upadhyay";
// var is an function scope and it is hoisted, it give undefined.


console.log(ab);  
console.log(isLoggin); // let and const are hoisted in temporal dead zone means the time between declared till hoisted. And it is in block scope


let ab = 2555;
const isLoggin = "true"

{
    let a = 25;
    const b = 56;
    var c = 44;

    console.log(a); //25
    console.log(b); // 56
    console.log(c); // 44
        /* so, let and const are block scope they access within in an block not outside of the block.
          var is an function block or global scope they access inside the block as well as outside the block.
        */    
}                           

console.log(a); // error
console.log(b); error
console.log(c); // 44



