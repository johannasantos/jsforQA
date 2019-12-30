// values of an array

var container = []

var people = ["van", "lucas", "sam"]

// pop == borrar and push == agregar un nuevo elemento al array

var container = ["rojo", "azul", "amarillo", "verde"]

container.pop()

console.log(container)

container.push("rosa")

console.log(container)

// shift and unshift 

var container = ["rojo", "azul", "amarillo", "verde"]

container.shift()

container.unshift("violeta")

console.log(container)

// splice and slice

var container = ["rojo", "azul", "amarillo", "verde"]

container.splice(0, 0, "black") // add black to the front

container.splice(0, 1) //remove the first element

container.splice(0, 1, "black") //remove first element and insert black

var container = ["rojo", "azul", "amarillo", "verde"]

var newContainer = container.slice(3)



// ACTIVITY 

var things = []

var answer

answer = prompt("cual es tu cosa favorita?")
things.push(answer)

answer = prompt("cual es tu segunda cosa fav?")
things.push(answer)

answer = prompt("cual es tu tercer cosa fav?")
things.push(answer)

console.log(things)

// prueba

var books = []

var answer

answer = prompt("what's your favorite book?")
books.push(answer)

answer = prompt("what's the second favorite?")
books.push(answer)

answer = prompt("and the third favorite?")
books.push(answer)

answer = prompt("and the fourth favorite?")
books.push(answer)

answer = prompt("and the fifth favorite?")
books.push(answer)

answer = prompt("and the sixth favorite?")
books.unshift(answer)

books.pop()

console.log(books)







