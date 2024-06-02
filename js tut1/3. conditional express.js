// if , else, else if
// prompt is asking and alert is telling
let a = prompt("what is your age ? ")
a = Number.parseInt(a) // convert the string into number
if (a > 16) {
    alert("this is a valid age ")
} else if (a < 15 && a >= 5) {
    alert("baby dont go plsss")
} else if (a < 4 && a > 1) {
    document.write("mera yashu yashu")
} else {
    alert("lol ha ha ha ")
}