var squares = document.querySelectorAll(".block");
let checker = (arr, target) => target.every((v) => arr.includes(v));
let Game = (function () {
  function takeInputs() {
    let button = document.querySelector("#button1");
    let player1 = document.getElementById("p1");
    let player2 = document.getElementById("p2");
    player1.addEventListener("keyup", function () {
      let player1Name = player1.value;
      let newPlayer = Player(player1Name);
      console.log(newPlayer, 1);
    });
    player2.addEventListener("keyup", function () {
      let player2Name = player2.value;
      let newPlayer = Player(player2Name);
      console.log(newPlayer, 2);
    });
    button.addEventListener("click", function () {
      document.querySelector(".landing1").style.display = "none";
      document.querySelector(".landing2").style.display = "flex";
    });
  }
  var count = 0;
  let winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  var circlesArray = [];
  var crossesArray = [];
  function putYourMark() {
    for (let j = 0; j < squares.length; j++) {
      squares[j].addEventListener("click", () => {
        count++;
        if (count % 2 === 0 && count <= 9) {
          squares[j].textContent = "X";
          crossesArray.push(j);
          checkForWin(crossesArray);
        }
        if (count % 2 !== 0 && count <= 9) {
          squares[j].textContent = "O";
          circlesArray.push(j);
          checkForWin(circlesArray);
        }
      });
    }
  }
  function checkForWin(playerArray) {
    for (let k = 0; k < winningCombinations.length; k++) {
      var combo = winningCombinations[k];
      if (checker(playerArray, combo)) {
        alert("!!WIN!!");
      }
    }
  }
  function start() {
    let button = document.querySelector("#button2");
    button.addEventListener("click", function () {
      document.querySelector(".landing2").style.display = "none";
      document.querySelector(".container").style.display = "flex";
    });
    putYourMark();
  }
  return { start, takeInputs };
})();
Game.takeInputs();
Game.start();
function Player(name, id) {
  this.name = name;
  this.id = id;
  this.score = 0;
  return { name, id , score };
}
