import { NewItemBtn } from "./createNewItemButton";

export function SubjectBoard(subject) {
  this.subject = subject;

  this.createBoard = function () {
    const itemBoxElement = document.querySelector(".item-wrap");
    const newBoard = document.createElement("div");
    newBoard.classList.add("subject-board");
    newBoard.classList.add("hidden");
    newBoard.setAttribute("id", `${subject}Board`);

    itemBoxElement.appendChild(newBoard);

    //add item creation btn
    const addItemBtn = new NewItemBtn(newBoard);
    addItemBtn.createItemBtn();
  };
}
