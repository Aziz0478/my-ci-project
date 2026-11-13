"use strict";

const checkButton = document.getElementById("check-button");
const result = document.getElementById("result");

checkButton.addEventListener("click", () => {
  result.textContent = "JavaScript подключён и работает!";
});
