var favFood = "pasta"

switch (favFood) {
    case "pasta":
        console.log("pasta!")
        break
    case "pizza":
        console.log("pizza!")
        break
    default:
        console.log(favFood)

}

// test

var favColor = "red"

if (favColor == "blue") {

    console.log("Violets are blue")

} else if (favColor == "red") {

    console.log("Roses are red")

} else {

    console.log("Sugar is sweet")

}

var favColor = "red"

switch (favColor) {
    case "blue":
        console.log("Violets are blue")
        break
} switch (favColor) {
    case "red":
        console.log("Roses are red")
        break
    default:
        console.log("Sugar is sweet")

}