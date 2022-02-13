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
const correctAns = document.querySelector(".corrAns");

let questionArr = [];
let ques = {};
let numCorrect = 0;
const generateMarkup = function () {
  const markup = questionArr
    .map((el, i) => {
      return `
    <div class="submit-cont">
      <p>${el.question}</p>
      <div class="choises">
          <input  class="radio radio--1" type="radio" name="choose${i}" id="choise1"  value="${el.answer.ans1}" />
          <label for="choise1">${el.answer.ans1}</label>
      </div>
      <div class="choises">
          <input  class="radio radio--2" type="radio" name="choose${i}" id="choise2" value="${el.answer.ans2}" />
          <label for="choise2">${el.answer.ans2}</label>
      </div>
      <div class="choises">
          <input  class="radio radio--3" type="radio" name="choose${i}" id="choise3" value="${el.answer.ans3}" />
          <label for="choise3">${el.answer.ans3}</label>
      </div>
      <div class="choises">
          <input  class="radio radio--4" type="radio" name="choose${i}" id="choise4" value="${el.answer.ans4}" />
          <label for="choise4">${el.answer.ans4}</label>
      </div>
      </div>
    `;
    })
    .join("");
  return markup;
};
function showResults() {}
btnAdd.addEventListener("click", function () {
  ques = {
    question: question.value,
    answer: {
      ans1: choise1.value,
      ans2: choise2.value,
      ans3: choise3.value,
      ans4: choise4.value,
    },
    correctAnswer: correctAns.value,
  };
  questionArr.push(ques);

  choise1.value =
    choise2.value =
    choise3.value =
    choise4.value =
    question.value =
    correctAns.value =
      "";
  container.innerHTML = "";
  container.insertAdjacentHTML("afterbegin", generateMarkup());
});

submit.addEventListener("click", (e) => {
  const answers = document.querySelectorAll(".radio");
  const submitCont = document.querySelector(".submit-cont");
  questionArr.forEach((currAns, quesNum) => {
    const selector = document.querySelectorAll(`input[name=choose${quesNum}]`);
    let userAns = "";
    selector.forEach((el) => {
      if (el.checked) {
        userAns = el.value;
        if (userAns === currAns.correctAnswer) {
          numCorrect++;
          submitCont.style.backgroundColor = "green";
        } else {
          submitCont.style.backgroundColor = "orangered";
        }
      }
    });
  });
});
