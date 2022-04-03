const progressBar = document.querySelector(".progress-bar");
const startButton = document.getElementById("start");
isAnimating = false;
let totalClick = 0;
function Animate() {
  isAnimating = true;

  if (totalClick === 0) return;

  progressBar.classList.add("load");
  setTimeout(() => {
    progressBar.classList.remove("load");
    isAnimating = false;
    totalClick--;
    startButton.innerHTML = "Run " + totalClick;
    if (totalClick !== 0) {
      setTimeout(() => Animate(), 100);
    }
  }, 3000);
}
function handleClick() {
  totalClick++;
  startButton.innerHTML = "Run " + totalClick;
  if (isAnimating == false) {
    Animate();
  }
}
startButton.addEventListener("click", handleClick);
