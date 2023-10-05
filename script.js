const mainTitle = document.querySelector("#title");
let curValue = 0;

const btnPlus = document.querySelector("#plus");
const btnReset = document.querySelector("#reset");
const btnMinus = document.querySelector("#minus");

// Valgte å gjøre ting på denne måten, siden det var slik jeg først lærte det, og jeg føler det er lettere og raskere!
btnPlus.addEventListener("click", () => {
  curValue++;
  mainTitle.textContent = curValue;
});

btnMinus.addEventListener("click", () => {
  curValue--;
  mainTitle.textContent = curValue;
});

btnReset.addEventListener("click", () => {
  curValue = 0;
  mainTitle.textContent = curValue;
});
