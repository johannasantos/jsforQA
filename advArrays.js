// array length

var arr = [1, 2, 3]

arr.length

var arr = ["mama", "uhh", "didn't make you cry"]

arr.toString()

// merging arrays - concatenacion 

var array1 = [1, 2, 4]
var array2 = [2, 4, 5]
var array3 = [6, 8, 9]


var newArr = array1.concat(array2)
newArr = array2.concat(array1)

newArr = array1.concat(array2, array3)


// sorting a string array

var arr = [1, 2, 3]

arr.sort()

arr.reverse()

// sorting a number array

var num = [25, 100, 56]

num.sort(function (a, b) { return a - b })

// array forEach and map

// for each no devuelve un array 
var num = [1, 2, 3, 4, 5]
var newNum = ""

num.forEach(funky)

function funky(value, index, array) {
    newNum = newNum + index + ": " + value + "& " + array[index] + "\n"
}


// map si devuelve un array 

var num = [1, 2, 3, 4, 5]

num.map(funky)

function funky(value, index, array) {
    newNum = index + ": " + value + "& " + array[index] + "\n"
    return newNum
}

// array filter

var num = [1, 20, 34, 55, 15]

var even = num.filter(isEven)

function isEven(value, index, array) {
    return value % 2 == 0
}






