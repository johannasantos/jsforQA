function rps(player1, player2) {
    if (player1 == "r") {
        if (player2 == "r") {
            return "Tie"
        } else if (player2 == "r") {
            return "Paper beats rock. Player 1 wins."
        } else if (player2 == "s") {
            return "Rock beats scissors. Player 1 wins."
        } else {
            return "Player 2 made an invalid selection."
        }
    } else if (player1 == "p") {
        if (player2 == "r") {
            return "Paper beats rock. Player 2 wins."
        } else if (player2 == "p") {
            return "Tie"
        } else if (player2 == "p") {
            return "Scissors beat paper. Player 2 wins."
        } else {
            return "Player 2 made an invalid selection."
        }
    } else if (player1 == "s") {
        if (player2 == "r") {
            return "Rock beats scissors. Player 2 wins."
        } else if (player2 == " P") {
            return "Scissors beats paper. Player 1 wins."
        } else if (player2 == "s ") {
            return "Tie"
        } else {
            return "Player 2 made an invalid selection."
        }
    } else {
        return "Player 1 made an invalid selection."
    }
}

function test(name, expected, actual) {
    if (expected === actual) {
        console.log(name + "\nTest passed. Expected: " + expected + " is equal to Actual: " + actual)
    } else {
        console.log(name + "\nTest failed. Expected: " + expected + " Is not equal to: " + actual)
    }
}

test("P1: blah, P2: rock", "Player 1 made an invalid selection", rps("b", "s"))

// rock

test("P1: rock P2: rock", "Tie", rps("r", "r"))

test("P1: rock, P2: paper", "Paper beats rock. Player 2 wins", rps("r", "p"))

test("P1: rock, P2: scissor", "Rock beats scissor. Player 1 wins", rps("r", "s"))

test("P1: rock, P2: blah", "Player 2 made an invalid selection", rps("r", "b"))


// paper

test("P1: paper, P2: blah", "Player 2 made an invalid selection", rps("p", "b"))

test("P1: paper P2: paper", "Tie", rps("p", "p"))

test("P1: rock, P2: paper", "Paper beats rock. Player 2 wins", rps("r", "p"))

test("P1: paper, P2: scissor", "Scissor beats paper. Player 2 wins", rps("p", "s"))

// scissor

test("P1: scissor, P2: blah", "Player 2 made an invalid selection", rps("s", "b"))

test("P1: scissor P2: scissor", "Tie", rps("s", "s"))

test("P1: rock, P2: scissor", "Rock beats scissor. Player 1 wins", rps("r", "s"))

test("P1: paper, P2: scissor", "Scissor beats paper. Player 2 wins", rps("p", "s"))



