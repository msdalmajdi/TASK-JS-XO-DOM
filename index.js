// ❗️ DON'T TOUCH THESE 2 FUNCTIONs
// Pre-made function that will fill the button with its number.
// First button top left is called 1, last button bottom right is 9
function fillButton(index, text) {
  // This function fills the button of the send index
  document.getElementById(index).innerHTML = text;
}
// pre-made a function. You can use this function to present an alert to say someone wins
function winningAlert(winner) {
  if (confirm(`Horraaay, ${winner} wins!`)) {
    // The code here will be exectued if you press on OK button that will pop on the window
  }
}

// SAMPLE CODE: This code fills the 1st and 9th button with X and O initially
// ❗️ Delete this code once you are done testing

/**
 *
 * THE MAIN FUNCTION
 * This function gets executed every time the user clicks the button
 * Add your code here, since this is going to be your main function
 * That interacts with the UI
 */
let turns = 0;
const indices = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function clickButton(index) {
  console.log(`Button number ${index} is clicked`);
  // Your main code here.
  if (filledButton(index)) {
    alert("Can't click");
    return;
  }
  if (turns % 2 === 0) {
    player = "X";
  } else {
    player = "O";
  }
  fillButton(index, player);
  styleButton(index, player);
  turns++;
  checkWinner();
}

/**
 * (Optional) It's always a good idea to make a function for every single purpose.
 */
// function checkWinner
// function restartGame

function styleButton(index, text) {
  //my addition
  let color = "";
  if (text === "X") {
    color = "green";
  }
  if (text === "O") {
    color = "red";
  }
  document.getElementById(index).classList.add(color);
  document.getElementById(index).classList.add("animate");
}
function filledButton(index) {
  if (fieldNow(index) === "X" || fieldNow(index) === "O") {
    return true;
  }
  return false;
}

function fieldNow(index) {
  let now = document.getElementById(index).innerHTML;
  return now;
}

function checkWinner() {
  switch (true) {
    // rows 1 2 3
    case fieldNow(1) == "X" && fieldNow(2) == "X" && fieldNow(3) == "X":
      turns = 0;
      winningAlert("X");
      break;
    case fieldNow(1) == "O" && fieldNow(2) == "O" && fieldNow(3) == "O":
      turns = 0;
      winningAlert("O");
      break;
    case fieldNow(4) == "X" && fieldNow(5) == "X" && fieldNow(6) == "X":
      turns = 0;
      winningAlert("X");
      break;
    case fieldNow(4) == "O" && fieldNow(5) == "O" && fieldNow(6) == "O":
      turns = 0;
      winningAlert("O");
      break;
    case fieldNow(7) == "X" && fieldNow(8) == "X" && fieldNow(9) == "X":
      turns = 0;
      winningAlert("X");
      break;
    case fieldNow(7) == "O" && fieldNow(8) == "O" && fieldNow(9) == "O":
      turns = 0;
      winningAlert("O");
      break;

    // columns 1 2 3
    case fieldNow(1) == "X" && fieldNow(4) == "X" && fieldNow(7) == "X":
      turns = 0;
      winningAlert("X");
      break;
    case fieldNow(1) == "O" && fieldNow(4) == "O" && fieldNow(7) == "O":
      turns = 0;
      winningAlert("O");
      break;
    case fieldNow(2) == "X" && fieldNow(5) == "X" && fieldNow(8) == "X":
      turns = 0;
      winningAlert("X");
      break;
    case fieldNow(2) == "O" && fieldNow(5) == "O" && fieldNow(8) == "O":
      turns = 0;
      winningAlert("O");
      break;
    case fieldNow(3) == "X" && fieldNow(6) == "X" && fieldNow(9) == "X":
      turns = 0;
      winningAlert("X");
      break;
    case fieldNow(3) == "O" && fieldNow(6) == "O" && fieldNow(9) == "O":
      turns = 0;
      winningAlert("O");
      break;

    // 2 diagonals
    case fieldNow(1) == "X" && fieldNow(5) == "X" && fieldNow(9) == "X":
      turns = 0;
      winningAlert("X");
      break;
    case fieldNow(1) == "O" && fieldNow(5) == "O" && fieldNow(9) == "O":
      turns = 0;
      winningAlert("O");
      break;
    case fieldNow(3) == "X" && fieldNow(5) == "X" && fieldNow(7) == "X":
      turns = 0;
      winningAlert("X");
      break;
    case fieldNow(3) == "O" && fieldNow(5) == "O" && fieldNow(7) == "O":
      turns = 0;
      winningAlert("O");
      break;
    case drawGame():
      turns = 0;
      alert("Its a draw");
      break;
    default:
      return;
  }
  restartGame();
}

function restartGame() {
  indices.forEach((index) => clearButton(index, ""));
}

function clearButton(index, text) {
  document.getElementById(index).innerHTML = text;
  document.getElementById(index).classList.remove("red");
  document.getElementById(index).classList.remove("green");
  document.getElementById(index).classList.remove("animate");
}

function drawGame() {
  return indices.every(
    (index) => fieldNow(index) === "X" || fieldNow(index) === "O"
  );
}
