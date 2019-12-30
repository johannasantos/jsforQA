// events (modifican el html)


function btnPressed() {
    console.log("button 1 was pressed")
    document.getElementById("p1").innerHTML = "button 1 pressed"
}

function txtTyped() {
    console.log("text was typed")
    if (document.getElementById("i1").value == "123") {
        document.getElementById("p2").innerHTML = "valid password"
    } else {
        document.getElementById("p2").innerHTML = "invalid password"
    }
}

// event listeners (no tocan el html)

document.getElementById("b2").addEventListener("click", btn2Pressed)

function btn2Pressed() {
    console.log("button 2 was pressed")
    document.getElementById("p1").innerHTML = "button 2 pressed"
}

document.getElementById("i2").addEventListener("change", txt2Typed)

function txt2Typed() {
    console.log("text was typed")
    if (document.getElementById("i2").value == "123") {
        document.getElementById("p4").innerHTML = "valid password"
    } else {
        document.getElementById("p4").innerHTML = "invalid password"
    }
}

document.getElementById("p4").addEventListener("mouseover", moused)

function moused() {
    this.innerHTML = "you've been moused!"
}







