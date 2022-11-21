"use strict";

import { SubjectBoard } from "./createItemBoards";
import { ItemObject } from "./createItemObject";
import { dupCheck } from "./duplicateCheck";
import {
  subjectModalElement,
  closeSubjectModal,
  openSubjectModal,
  itemModalElement,
  closeItemModal,
  openItemModal,
  showSubjectError,
  removeSubjectError,
  showDupError,
  removeDupError,
  clearSubjectFormInput,
} from "./helperFunctions";
import { renderCards } from "./renderItemCards";

//object for holding the name of subjects and an array of corresponding items
const subjectCatalogObject = {};

//keeps track of board we are currently using
export let currentBoard = "";

//variables related to subject wrap
const addSubjectBtnElement = document.querySelector("#createSubjectBtn");
const subjectFormBtnElement = document.querySelector("#subjectFormBtn");

//variables related to item wrap
const itemFormBtnElement = document.querySelector("#itemFormBtn");

//subjectBtn listener, opens modal that contains form for creating new
//subject button
addSubjectBtnElement.addEventListener("click", function () {
  openSubjectModal();
  removeSubjectError();
  clearSubjectFormInput();
  removeDupError();
});

//close subject modal, click outside
subjectModalElement.addEventListener("click", function (event) {
  const isOutside = !event.target.closest(".modal-inner");
  if (isOutside) {
    closeSubjectModal();
  }
});

//close item modal, click outside
itemModalElement.addEventListener("click", function (event) {
  const isOutside = !event.target.closest(".modal-inner");
  if (isOutside) {
    closeItemModal();
  }
});

//subject form button, appends newly created button to subject-box element and appends newly created subject-box element to item-wrap.
subjectFormBtnElement.addEventListener("click", function (event) {
  event.preventDefault();

  const subjectFormInput = document.querySelector("#subjectInput");
  const newBtn = new SubjectBtn(subjectFormInput.value);
  let allSubjectBtns = Array.from(document.querySelectorAll(".subject-btn"));
  const idExists = Boolean(
    dupCheck(allSubjectBtns, `${subjectFormInput.value}Btn`)
  );

  if (subjectFormInput.value == 0) {
    showSubjectError();
  } else if (idExists) {
    showDupError();
    clearSubjectFormInput();
  } else {
    const newBoard = new SubjectBoard(subjectFormInput.value);
    newBtn.createSubjectBtn();
    newBoard.createBoard();
    subjectCatalogObject[subjectFormInput.value] = [];
    closeSubjectModal();
  }
});

//listener for the itemFormBtn
itemFormBtnElement.addEventListener("click", function (event) {
  event.preventDefault();
  //input variables
  const itemTitleInputElement = document.querySelector("#itemTitleInput");
  const itemDescriptionInputElement = document.querySelector(
    "#itemDescriptionInput"
  );
  const itemDueDateInputElement = document.querySelector("#itemDueDateInput");
  const itemPriorityInputElement = document.querySelector("#itemPriorityInput");

  if (itemTitleInputElement.value.length === 0) {
  } else {
    const newItemObject = new ItemObject(
      itemTitleInputElement.value,
      itemDescriptionInputElement.value,
      itemDueDateInputElement.value,
      itemPriorityInputElement.value
    );
    subjectCatalogObject[currentBoard].push(newItemObject);
    console.log(subjectCatalogObject);
    closeItemModal();
    renderCards(subjectCatalogObject[currentBoard], currentBoard);
  }
});

//creates subjectBtns
function SubjectBtn(subject) {
  this.newBtn = document.createElement("button");

  this.createSubjectBtn = function () {
    const subjectBoxElement = document.querySelector(".subject-box");
    this.newBtn.classList.add("subject-btn");
    this.newBtn.setAttribute("id", `${subject}Btn`);
    this.newBtn.innerHTML = `${subject}`;

    subjectBoxElement.appendChild(this.newBtn);

    this.newBtn.addEventListener("click", function () {
      const allBoards = document.querySelectorAll(".subject-board");
      allBoards.forEach((board) => {
        if (board.id === `${subject}Board`) {
          board.classList.remove("hidden");
        } else {
          board.classList.add("hidden");
        }
      });
      currentBoard = subject;
    });
  };
}
