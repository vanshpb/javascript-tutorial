for (let i=1 ; i<=5; i++){
console.log(i)
}
//
let sum = 0
let n =  prompt("enter the number")
n = Number.parseInt(n)
for (let i = 0; i < n; i++) {
    sum += (i + 1)
    document.write("+" ,(i+1))
}
document.write("the sum of first "+ n +" natural number are " + sum)
//for in loop
let obj = {
    hari: 90,
    bebika: 60,
    nilla: 12
}
for (let a in obj) {
    // document.write(" marks of " + a + " are " + obj[a] + " ||")
    // document.write("," + obj[a])
    document.write(a +" , ")}
//for of loop
for (let b of "vansh"){
    console.log(b)
}