const start = document.getElementById("start");
start.addEventListener("click", startGame);
let isblinking = false;
let blinkedBoxes = [];
let clickedBoxes = [];
function blink(count, cards) {
  if (count == 0) {
    return;
  }
  const randombox = getRandom();
  cards[randombox].classList.add("blink");
  setTimeout(() => {
    cards[randombox].classList.remove("blink");
    count--;
    setTimeout(() => blink(count, cards), 100);
  }, 2000);
}

function startGame() {
  let score = 0;

  blink(1);
  const scoreDiv = document.getElementById("score");
  scoreDiv.innerHTML = `Score :${score}`;

  const cards = document.querySelectorAll(".card");

  function handleClick(e) {
    e.target.dataset.num;
  }
  cards.forEach((card) => {
    console.log(card);
    card.addEventListener("click", (e) => handleClick(e));
  });

  highlight();
}
