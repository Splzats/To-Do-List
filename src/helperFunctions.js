//modals
export const subjectModalElement = document.querySelector("#subjectModal");

export function closeSubjectModal() {
  subjectModalElement.classList.remove("open");
}

export function openSubjectModal() {
  subjectModalElement.classList.add("open");
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
