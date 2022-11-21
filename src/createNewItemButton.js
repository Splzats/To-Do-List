import {
  openItemModal,
  setDateToday,
  clearItemFormInputs,
} from "./helperFunctions";

export function NewItemBtn(subjectTarget) {
  this.newItemBtn = document.createElement("button");

  this.createItemBtn = function () {
    this.newItemBtn.classList.add("item-btn");
    this.newItemBtn.innerHTML = "+";

    subjectTarget.appendChild(this.newItemBtn);

    this.newItemBtn.addEventListener("click", function () {
      setDateToday();
      openItemModal();
      clearItemFormInputs();
    });
  };
}
