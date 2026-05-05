let homeScoreEl = document.getElementById("homeScore")
let guestScoreEl = document.getElementById("guestScore")
let homeScore = 0
let guestScore = 0

function add1PointsToHome() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function add2PointsToHome() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function add3PointsToHome() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

function add1PointsToGuest() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function add2PointsToGuest() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function add3PointsToGuest() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}

function newGame() {
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
}