// length

var thing = 10

thing.length

if (thing.length > 5) {
    console.log("cat")
}

// using indexes and searching

var sentence = "i say hello and you say hello"

// first ocurrance of string 

sentence.indexOf("hello")

// last ocurrance of string

sentence.lastIndexOf("hello")

// search

sentence.search("hello")

// taking a slice or substring or substr

var str = "happy, excited, calm"

var sl = str.slice(7, 14)
console.log(sl)

sl = str.slice(7)
console.log(sl)

sl = str.slice(-13, -6)
console.log(sl)

sl = str.slice(-13)
console.log(sl)

// substring

var str = "happy, excited, calm"

var sb = str.substring(7, 14)
console.log(sb)

sb = str.substring(7)
console.log(sb)


// la diferencia entre substring y slice es que en un substring no permite usar indexes negativos

sb = str.substring(-13, -6)
console.log(sb)

// substr

// la diferencia con los otros es que el primer parametro calcula el index y el 
// segundo calcula el largo (length) del string

var str = "happy, excited, calm"

sr = str.substr(7, 6)
console.log(sr)

sr = str.substr(7)
console.log(sr)


// replacing content

var comida = "Tengo comida para el almuerzo"

var almuerzo = comida.replace("almuerzo", "cena")

console.log(almuerzo)

// uppercase

var word = "sad"
var upperWord = word.toUpperCase()
console.log(upperWord)

var word = "SAD"
var lowerWord = word.toLowerCase()
console.log(lowerrWord)

var sentence = "    HELLO WORLD!     "

var clean = sentence.trim()
console.log(clean)

// de string a array

var str = "1,2,3,4"

var arr = str.split(",")


var str = "1 2 3 4"

var arr = str.split(" ")

// de string a number


var num = "5"

var newNum = Number(num)

// ENTERO   
var num = ""

num = parseInt("5")

// DECIMAL

var num = ""

num = parseFloat("5.5")


// test

var story = "Cheeseburgers come in all kinds of manifestations, but we want them in and around our mouth no matter what. Slide those smashed patties with the gently caramelized meat fat between a toasted brioche bun and pass it over. You fall in love with the cheeseburger itself but the journey ain’t half bad either. They’re the childhood friend that knows your highest highs and lowest lows. They’ve been with you through thick and thin and they’re the best at keeping secrets. Whether it’s dressed up or informal, cheeseburgers have your back. Sometimes we lose sight of what really matters in life. There’s something to be said for a gourmet brie and truffle burger paired with parmesan frites, but don’t let that make you forget about the ol’ faithful with American cheddar and a squishy bun. Lettuce remind you that cheeseburgers come in all forms - bun intended. Pop quiz: what’s the greatest thing to happen to your mind, body, and soul in recent history? A cheeseburger, obviously. Cheeseburgers know that what you want can also be what you need."

story.replace(/cheeseburger/g, "hamburgers")

story.replace(/bun/g, "bun".toUpperCase())

story.length

story.split(" ").length