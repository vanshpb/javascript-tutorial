//var//
console.log("js 3: var,let and const")
console.log("var");
var a= 12;
var b = "hello";
var c = undefined
{
    var b = 14;//(value get change or update accordingly)
console.log(b)
}
{
    let a = 10; //(if use var can change 12 into 10 in the last line)
    console.log(a)
}
    console.log(a, b, c, b)
//let//
console.log("let");
{
    let x = 11;
    let y = 12;
    let z= 13;
    {
        let z = 10;//(have a unique place and dont intrupt others)
        console.log(z)
    }
        console.log(x, y, z)
}
//const//
console.log("const");
{
let n = "hello"
var o = "world"
const m = "baby"
n = 4
//m = 9 (shows an error coz m already declare)
o = 6
console.log(n, o, m )
}
