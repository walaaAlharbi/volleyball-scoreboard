let Result0 = document.getElementById("result0")
let Result1 = document.getElementById("result1")

let team1sets = document.getElementById("sets1")
let team2sets = document.getElementById("sets2")



function addpoint0() {
    Result0.textContent = +Result0.textContent + 1
}
function addpoint1() {
    Result1.textContent = +Result1.textContent + 1
}



function newset() {
    let points1 = +Result0.textContent
    let points2 = +Result1.textContent
    if (points1 > points2) {
        team1sets.textContent = +team1sets.textContent + 1
    }
    else if (points1 < points2) {
        team2sets.textContent = +team2sets.textContent + 1
    }
    Result0.textContent = 0
    Result1.textContent = 0
}

function newgame() {
    Result0.textContent = 0
    Result1.textContent = 0
    team1sets.textContent = 0
    team2sets.textContent = 0
}