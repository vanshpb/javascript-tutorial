{var a = "kushboo"}
//
{
//length of the string
let l = (a.length)
console.log(l)//output 7
//or can be used this
console.log(a.length)//output 7
}
//
{
    // String to uppercase 
    let upr = (a.toUpperCase())
    console.log(upr)//output KHUSBOO
}
//
{
    // string to lowercase
    let lwr = (a.toLowerCase())
    console.log(lwr)//output khusboo
}
//
{
    //slice with second argument
    let slice = (a.slice(2,5))
    console.log(slice)//output shb
}
{
    // slice with single argument
    let slice1 = (a.slice(2))
    console.log(slice1)//output shboo
}
{
    // replace method
    var rep = (a.replace('boo', 'uuu'))
    console.log(rep) //output kushuuu
}
{
    // concat method
    let cat = (a.concat(" is love of my life"))
    let cat2 =(rep.concat(" is love of my life"))
    console.log(cat) // kushboo is love of my life
    console.log(cat2) // kushuuu is love of my life
}
{
    // trim method
    let b = "    -vanshuu-      "
    console.log(b)
    console.log(b.trim()) // remove space form string
}
// strings are immutable 
