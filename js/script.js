let h = document.querySelector("#height");
let w = document.querySelector("#weight");
let btn = document.querySelector("button");
let resBox = document.querySelector("div.resultBox");
let resultText = document.querySelector("p");
let resultBMI = document.querySelector("span");
let boxs = Array.from(document.querySelectorAll("li"));

btn.addEventListener("click", () => {
  h2 = Number(h.value);
  w2 = Number(w.value);
  let bmi;
  if (h2 > 0 && w2 > 0) {
    bmi = (w2 / (h2 * h2)) * 100000;
    bmi = Math.floor(bmi) / 10;
  } else {
    bmi = 0;
  }
  let temp;
  let color;
  if (bmi == 0) {
    temp, (color = "undefined");
  } else if (bmi < 16) {
    temp = "Severely Underweight";
    color = "yellow";
  } else if (18.5 > bmi && bmi >= 16) {
    temp = "Underweight";
    color = "yellow";
  } else if (25 > bmi && bmi >= 18.5) {
    temp = "Normal";
    color = "green";
  } else if (30 > bmi && bmi >= 25) {
    temp = "Overweight";
    color = "orange";
  } else if (35 > bmi && bmi >= 30) {
    temp = "Moderately Obese";
    color = "red";
  } else if (40 > bmi && bmi >= 35) {
    temp = "Severely Obese";
    color = "red";
  } else {
    temp = "Morbidly Obese";
    color = "red";
  }

  boxcolor(temp, color, bmi);

  h.value = "";
  w.value = "";
});

let sth;
function boxcolor(temp, color, bmi) {
  boxs.map((elem) => {
    elem.classList.remove("active");
    elem.classList.remove(sth);

    if (elem.innerHTML == temp) {
      resultText.innerHTML = `You are ${temp}!`;
      resultBMI.innerHTML = bmi;
      resBox.style.display = "flex";
      elem.classList.add("active");
      elem.classList.add(color);
    }
  });
  sth = color;
}
