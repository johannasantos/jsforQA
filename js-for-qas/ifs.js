var answer = prompt("put your gifts ideas here!")

if (answer == "roses") {
    console.log("I like " + answer + "!")
} else if (answer == "jewelry") {
    console.log("fancy " + answer)
} else if (answer == "card") {
    console.log("you can do best than a " + answer)
} else if (answer == "money") {
    console.log("maybe something more original than " + answer + "?")
} else if (answer == "candy") {
    console.log(answer + " that's yummy!")
} else if (answer == "electronics") {
    console.log(answer + "?" + " Good idea!")
} else if (answer == "books") {
    console.log(answer + "?" + " Ohh nice one!")
} else if (answer == "puppy") {
    console.log("that's adorable!")
}
else {
    (answer + " that's great too, she'll be happy!")
}

// && | | para hacer el pip se usa shift + \ 

if (1 == 1 && 2 == 2) {
    console.log("son lo mismo")
}
if (1 == 1 || 2 == 2) {
    console.log("uno o los dos son iguales")
}


// nesting

if (1 == 1) {
    if (2 == 2) {
        console.log("both are the same")
    } else if (3 == 2) {
        // do something
    } else {
        // do something else
    }
} else if (3 == 1) {
    // do something
}


// activity: if this or that 

var answer1 = prompt("what's your favorite color?")
var answer2 = prompt("Pick a number between 1-5")

if (answer1 == "blue" && answer2 == "1") {
    console.log("those were my choices too")
} else {
    console.log("you chose " + answer1 + " and " + answer2)
}

var answer1 = prompt("what's your favorite color?")
var answer2 = prompt("Pick a number between 1-5")


if (answer1 == "blue" || answer2 == "1") {
    console.log("at least one of those match")
} else {
    console.log("you chose " + answer1 + " and " + answer2)
}

// version 2

var answer1 = prompt("what's your favorite color?")
var answer2 = prompt("Pick a number between 1-5")

if (answer1 == "blue") {
    if (answer2 == "1") {
        console.log("those were my choices too")
    } else {
        console.log("you didn't choose one")
    }
} else {
    console.log("you didn't choose blue ")
}












