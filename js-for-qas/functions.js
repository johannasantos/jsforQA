// defining a function

const message = function () {
    console.log("hi")
}

message()

// declaring a function

function message() {
    console.log("bye!")
}

message()

// returning data

function getMessage() {
    return "hello"
}

getMessage()

console.log(getMessage())


// parameters and arguments

function mensaje(mensaje1, mensaje2) {
    console.log(mensaje1)
    console.log(mensaje2)
}

mensaje("mensaje 1", "mensaje 2")


// activity: area de un rectangulo

function rectArea(lenght, width) {
    var area = lenght * width
    return area
}

rectArea(2, 5)

// constants

const algo // bad, tiene que estar declarada la variable si o si
const something = "van" // good 

// variable scope

var num = 1

function thing() {
    num = 2
    console.log("function: " + num)
}

thing()
console.log("outside function: " + num)

// let 

function cosa() {
    num = 2
    let num2 = 2
    console.log("function: " + num2)
}

cosa()
console.log("outside function: " + num2)


var num = 1

if (1 == 1) {
    console.log("if statement: " + num)
}

console.log(" outside if statement: " + num)


// test simple cashier 

let answer = prompt("You owe me $5. Please enter the amount you are paying.")

function cashier(amount) {
    let newCost
    let cost = 5

    newCost = cost - amount

    return newCost
}

// cashier(answer)

if (cashier(answer) == 0) {
    console.log("you gave the exact amount.")
} else if (cashier(answer) > 0) {
    console.log("You gave too little. You still owe " + cashier(answer) + ".")
} else if (cashier(answer) < 0) {
    let positiveCost = cashier(answer) * -1
    console.log("You gave too much. Your change due is $" + positiveCost + ".")
}










































