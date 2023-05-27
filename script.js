$(document).ready(function() {
   
var turn = "X";
var cells = $(".square");
var reset = $(".reset-button");

// Click event for each cell
cells.click(function() {
	if ($(this).text() == "") {
	$(this).text(turn);
	checkWin();
turn = turn == "X" ? "O" : "X";
}
});

var reset = $(".reset-button");
reset.click(function() { // add a click event listener
  resetGame(); // call the reset function
});

// see if there is a winner
function checkWin() {
var win = false;
var cells = $(".square");

// see horizontal rows
for (var i = 0; i <= 6; i += 3) {
if (cells[i].textContent != "" && cells[i].textContent == cells[i+1].textContent && cells[i].textContent == cells[i+2].textContent) {
win = true;
break;
}
}

// check vertical rows
for (var i = 0; i <= 2; i++) {
if (cells[i].textContent != "" && cells[i].textContent == cells[i+3].textContent && cells[i].textContent == cells[i+6].textContent) {
win = true;
break;
}
}

// check diagonal rows
if (cells[0].textContent != "" && cells[0].textContent == cells[4].textContent && cells[0].textContent == cells[8].textContent) {
win = true;
}
if (cells[2].textContent != "" && cells[2].textContent == cells[4].textContent && cells[2].textContent == cells[6].textContent) {
win = true;
}

// Display the winner or a tie
if (win) {
alert(turn + " wins!");
resetGame();
} else if ($(".square:empty").length == 0) {
alert("It's a tie!");
resetGame()
}
}

function resetGame() {
cells.text("");
turn = "X";
}
});
