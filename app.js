"use strict";
const accordion = document.querySelector(".accordion");
const items = accordion.querySelectorAll("li");
const question = accordion.querySelectorAll(".question");

function callBack() {
  const thisItem = this.parentNode;
  thisItem.classList.toggle("open");
}

question.forEach((question) => question.addEventListener("click", callBack));
