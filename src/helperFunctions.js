//modals
export const subjectModalElement = document.querySelector("#subjectModal");

export function closeSubjectModal() {
  subjectModalElement.classList.remove("open");
}

export function openSubjectModal() {
  subjectModalElement.classList.add("open");
}

export const itemModalElement = document.querySelector("#itemModal");

export function closeItemModal() {
  itemModalElement.classList.remove("open");
}

export function openItemModal() {
  itemModalElement.classList.add("open");
}

//errors
export const subjectErrorElement = document.querySelector("#subjectError");
export function showSubjectError() {
  subjectErrorElement.classList.remove("hidden");
}

export function removeSubjectError() {
  subjectErrorElement.classList.add("hidden");
}

const subjectDupErrorElement = document.querySelector("#subjectDupError");

export function showDupError() {
  subjectDupErrorElement.classList.remove("hidden");
}

export function removeDupError() {
  subjectDupErrorElement.classList.add("hidden");
}

//clears
const subjectFormInput = document.querySelector("#subjectInput");

export function clearSubjectFormInput() {
  subjectFormInput.value = "";
}

export function clearItemFormInputs() {
  //input variables
  const itemTitleInputElement = document.querySelector("#itemTitleInput");
  const itemDescriptionInputElement = document.querySelector(
    "#itemDescriptionInput"
  );
  const itemPriorityInputElement = document.querySelector("#itemPriorityInput");

  itemTitleInputElement.value = "";
  itemDescriptionInputElement.value = "";
  setDateToday();
  itemPriorityInputElement.value = "high";
}

//default due date set to today
export function setDateToday() {
  const itemDueDateInputElement = document.querySelector("#itemDueDateInput");
  //set date input default equal to today
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  let yyyy = today.getFullYear();
  today = yyyy + "-" + mm + "-" + dd;
  itemDueDateInputElement.value = today;
}
