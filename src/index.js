"use strict";

import { SubjectBtn } from "./createSubjectBtns";
import { SubjectBoard } from "./createItemBoards";
import { dupCheck } from "./duplicateCheck";
import {
  subjectModalElement,
  closeSubjectModal,
  openSubjectModal,
  showSubjectError,
  removeSubjectError,
  showDupError,
  removeDupError,
  clearSubjectFormInput,
} from "./helperFunctions";

//variables related to subject wrap
const addSubjectBtnElement = document.querySelector("#createSubjectBtn");
const subjectFormBtnElement = document.querySelector("#subjectFormBtn");

//subjectBtn listener, opens modal that contains form for creating new
//subject button
addSubjectBtnElement.addEventListener("click", function () {
  openSubjectModal();
  removeSubjectError();
  clearSubjectFormInput();
  removeDupError();
});

//close modal, click outside
subjectModalElement.addEventListener("click", function (event) {
  const isOutside = !event.target.closest(".modal-inner");
  if (isOutside) {
    closeSubjectModal();
  }
});

//subject form button, appends newly created button subject-box element
subjectFormBtnElement.addEventListener("click", function (event) {
  event.preventDefault();

  const subjectFormInput = document.querySelector("#subjectInput");
  const newBtn = new SubjectBtn(subjectFormInput.value);
  let allSubjectBtns = Array.from(document.querySelectorAll(".subject-btn"));
  const idExists = Boolean(
    dupCheck(allSubjectBtns, `${subjectFormInput.value}Btn`)
  );
  const newBoard = new SubjectBoard(subjectFormInput.value);

  if (subjectFormInput.value == 0) {
    showSubjectError();
  } else if (idExists) {
    showDupError();
    clearSubjectFormInput();
  } else {
    newBtn.createSubjectBtn();
    closeSubjectModal();
    newBoard.createBoard();
  }
});
