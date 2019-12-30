for (var i = 1; i < 10; i++) {
    console.log(i)
}

for (var i = 1; i < 5; i++) {
    console.log("hello " + i)
}

// for loop with if condition

for (var i = 1; i < 5; i++) {
    if (i == 1) {
        console.log("hello")
    } else if (i == 2) {
        console.log("bye")
    } else if (i == 3) {
        console.log("yo")
    } else if (i == 4) {
        console.log("see ya")
    }
}

// breaking the for loop

for (var i = 1; i < 10; i++) {
    if (i == 5) {
        break;
    } else {
        console.log(i)
    }
}

// for loop with an array

var things = [1, 2, "hello", "bye"]

for (var i = 0; i < 5; i++) {
    console.log(things[i])
}

// ACTIVITY

var answer = prompt("type YES or NO")
var answers = ["YES", "NO"]
var responses = ["You said YES", "You said NO", "You didn't follow directions"]


for (var i = 0; i < 2; i++) {
    if (answer != answers[0] && answer != answers[1]) {
        console.log(responses[2])
        break;
    } else if (answer == answers[i]) {
        console.log(responses[i])
    }
}

// FOR LOOP IN A FOR LOOP

var numbers = [1, 2, 3, 4, 5]
var letters = ["a", "b", "c"]

for (var i = 0; i < 5; i++) {
    console.log(numbers[i])

    for (var t = 0; t < 3; t++) {
        console.log(letters[t])
    }
}

// ACTIVITY: the square

var square = ""

for (var i = 0; i < 5; i++) {
    for (var t = 0; t < 5; t++) {
        square = square + "*"
    }
    square = square + "\n"
}

console.log(square)

// TRIANGLE

var triangle = ""

for (var i = 0; i < 5; i++) {
    for (var t = 0; t <= i; t++) {
        triangle = triangle + "*"
    }
    triangle = triangle + "\n"
}

console.log(triangle)













































