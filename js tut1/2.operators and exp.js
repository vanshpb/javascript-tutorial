console.log("operators in js")
// arithmetic operators
let a = 40;
let b = 2;
console.log(" a + b =",a + b) // addition
console.log(" a - b =",a - b) //subtraction
console.log(" a / b =",a / b) //division
console.log(" a * b =",a * b) //multipl
console.log(" a ** b =",a ** b) // power // a ki power b!!
console.log(" a % b =",a % b) //remainder or modulus oprator
//
console.log("a++ =",a++);
console.log(a)//first print then increment 
//
console.log("++a =",++a)//frist increment then print
//
console.log("--b =",--b)
//
console.log("b-- =",b--)
//
// assignment operators //
{
    let a = 5
    a += 5  // same as a = a+5
    console.log("a + =  ",a)
    a -= 5  // same as a = a-10 coz value of a was increamented before
    console.log("a - =  ",a)
    a /= 10
    console.log(" a / =  ",a ) //division
    a *= 10
    console.log(" a * =  ",a ) //multiple
    a **= 2
    console.log(" a ** = ",a ) // power // a ki power b!!
    a %= 4
    console.log(" a % =  ",a ) //remainder or modulus oprator

}    
// comparision ooperator
{
    let a = 5;
    let b = "5";
    console.log("a == b", a == b)// is equal to
    console.log("a !== b", a !== b) //is not equal to not equal type
    console.log("a != b", a != b) // is not equal to
    console.log("a === b", a === b)// a is a number but b is a string 

}
//logical operator
{
    let a = 2;
    let b = 5;
    console.log(a>b && a !== 5) // logical and 
    // for get the conculsion true the  both condition should be true
    console.log(a>b || a !== 5) //  logical or 
    // only one condition can be true
    console.log(!false) //true
    console.log(!true) //false
}


