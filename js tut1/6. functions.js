//normal function
let a =3;
let b =3;
function add(a,b) {
    return a+b;
}
const op = add(a,b);
console.log(op)
//normal function re-use
let x =5;
let y =7;
const hi = add(x,y);
console.log(hi)

//arrow function
{
    let a = 2;
    let b = 9;
    const add = (a,b) =>{
        return a + b;
    }
    let lol = add(a,b)
    console.log(lol)
//
let x=21
let y=22
let z=add(x,y)
console.log(z)
}































