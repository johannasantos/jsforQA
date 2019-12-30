// Finding Elements

var headingText = document.getElementById("heading")
console.log(headingText)

var paragraphText = document.getElementsByClassName("content")[1]
console.log(paragraphText)

var heading2Text = document.getElementsByTagName("h2")[0]
console.log(heading2Text)



console.log(document.body)
console.log(document.URL)
console.log(document.title)
console.log(document.head)


// Relationships

var h1Text = document.getElementById("heading").firstChild
console.log(h1Text)

var h1Hermano = document.getElementById("heading").nextSibling
console.log(h1Hermano)


var h1Parent = document.getElementById("heading").parentNode
console.log(h1Parent)
