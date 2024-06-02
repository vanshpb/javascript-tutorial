let a = 'vansh sethi'
console.log(a)
//tell the length of the string
console.log(a.length)
//access characters in the string using index number
console.log(a[3])
console.log(a[0])

//template litrals
let boy1 = "vansh";
let boy2 = "vanshika";
let friends = `${boy1} is bf of ${boy2}`//template litrals use back ticks
console.log(friends)

//escape sequence characters(\n = newline , \t = tab , \r = carriage return)
{
    let a = "ba\,na\,na\,"
    let b = "ba,na,na "
    let c = 'remo\'D suza'
    console.log(a + b + c)
    let d = "hello\tji"
    console.log(d)
    let e = "hello\n ji"
    console.log(e)
    let f = "hello\r return lelo ji"
    console.log(f)
}