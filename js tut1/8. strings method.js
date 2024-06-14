var a = "salman khan"
//
{
//length of the string
let l = (a.length)
console.log(l)//output 11
//or can be used this
console.log(a.length)//output 11
}
//
{
    // String to uppercase 
    let upr = (a.toUpperCase())
    console.log(upr)//output SALMAN KHAN
}
//
{
    // string to lowercase
    let lwr = (a.toLowerCase())
    console.log(lwr)//output salman khan
}
//
{
    //slice with second argument
    let slice = (a.slice(2,5))
    console.log(slice)//output lma
}
{
    // slice with single argument
    let slice1 = (a.slice(2))
    console.log(slice1)//output lman khan
}
{
    // replace method
    var rep = (a.replace('man', 'pan'))
    console.log(rep) //output salpan khan
}
{
    // concat method
    let cat = (a.concat(" is love of my life"))
    let cat2 =(rep.concat(" is love of my life"))
    console.log(cat) // salman khan is love of my life
    console.log(cat2) // salpan khan is love of my life
}
{
    // trim method
    let b = "    -vanshuu-      "
    console.log(b)
    console.log(b.trim()) // remove space form string
}
// strings are immutable 
