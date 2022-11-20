export function SubjectBoard(subject) {
  this.createBoard = function () {
    const itemBoxElement = document.querySelector(".item-wrap");
    const newBoard = document.createElement("div");
    newBoard.classList.add("subject-board");
    newBoard.setAttribute("id", `${subject}Board`);

    itemBoxElement.appendChild(newBoard);
  };
}
