var num = 1234

var str

str = num.toString()

    (123).toString()


Math

Math.PI

Math.round(4.5)

Math.pow(5, 2)

Math.sqrt(25)

Math.ceil(4.4)

Math.floor(4.7)

Math.min(1, 2, 5, 10, 300)

Math.max(1, 2, 5, 10, 300)

Math.random()

// TEST

function randNum(min, max) {
    min = Math.ceil(min)
    max = Math.ceil(max)
    var num = Math.floor(Math.random() * (max - min)) + min

    console.log(num)
}