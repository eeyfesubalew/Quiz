"use strict";
const question = document.querySelector(".question");
const choise1 = document.querySelector(".choise--1");
const choise2 = document.querySelector(".choise--2");
const choise3 = document.querySelector(".choise--3");
const choise4 = document.querySelector(".choise--4");
const btnAdd = document.querySelector(".btn-add");
const btnRemove = document.querySelector(".btn-remove");
const radio1 = document.querySelector(".radio--1");
const radio2 = document.querySelector(".radio--2");
const radio3 = document.querySelector(".radio--3");
const radio4 = document.querySelector(".radio--4");
const submit = document.querySelector(".submit");
const container = document.querySelector(".quiz-cont");
let questionArr = [];
let ques = {};

const generateMarkup = function () {
  const markup = questionArr
    .map((el) => {
      return `
    <div class="submit-cont">
      <p>${el.question}</p>
      <div class="choises">
          <input class="radio--1" type="radio" name="choose" id="choise1" />
          <label for="choise1">${el.ans1}</label>
      </div>
      <div class="choises">
          <input class="radio--2" type="radio" name="choose" id="choise2" />
          <label for="choise2">${el.ans2}</label>
      </div>
      <div class="choises">
          <input class="radio--3" type="radio" name="choose" id="choise3" />
          <label for="choise3">${el.ans3}</label>
      </div>
      <div class="choises">
          <input class="radio--4" type="radio" name="choose" id="choise4" />
          <label for="choise4">${el.ans4}</label>
      </div>
      </div>
    `;
    })
    .join("");
  return markup;
};
btnAdd.addEventListener("click", function () {
  ques = {
    question: question.value,
    ans1: choise1.value,
    ans2: choise2.value,
    ans3: choise3.value,
    ans4: choise4.value,
  };
  questionArr.push(ques);
  choise1.value =
    choise2.value =
    choise3.value =
    choise4.value =
    question.value =
      "";
  container.innerHTML = "";
  container.insertAdjacentHTML("afterbegin", generateMarkup());
});

submit.addEventListener("click", (e) => {
});
