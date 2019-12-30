// objects basics

var person = {
    firstName: "Van",
    favColor: "blue",
    favNumber: 21,
    isMarried: false,
    children: ["child2", "child2"],
    thing: {
        name: "object",
        color: "grey"
    }
}

// methods

var library = {
    book: "saracatunga",
    movie: "psycho",
    checkOut: function () {
        console.log("vos viste esta " + this.movie)
    },
    checkIn: function (number) {
        console.log("checkeaste" + number + "books")
    }
}

// test

var restoMenu = {
    name: "Pizza Jo Bleu",
    items: [
        {
            itemName: "Pepperoni Pizza",
            itemPrice: 10
        },
        {
            itemName: "Cuatro quesos",
            itemPrice: 8

        },
        {
            itemName: "faina",
            itemPrice: 10
        }
    ],
    listMenuItems: function () {
        var menuList = ""
        for (let i = 0; i <= 4; i++) {
            menuList += i + "." + this.items[i].itemName + " - $" + this.items[i].itemPrice + "\n"

        }
        alert(menuList)

        var answer = prompt("que item te gustaria? Pone el numero del item")
        this.selectMenuItem(answer)
    },
    selectMenuItem: function (number) {
        alert(this.items[number].itemName)
    }
}