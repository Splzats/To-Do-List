export function renderCards(cardArray, target) {
  const targetBoardElement = document.getElementById(`${target}Board`);
  console.log(`this is the cardArray: ${cardArray}`);
  for (let i = cardArray.length - 1; i < cardArray.length; i++) {
    const newCard = document.createElement("div");
    newCard.classList.add("item-card");
    targetBoardElement.appendChild(newCard);

    const cardTitle = document.createElement("div");
    const cardDescription = document.createElement("div");
    const cardDueDate = document.createElement("div");
    const cardPriority = document.createElement("div");

    cardTitle.classList.add("card-title");
    cardDescription.classList.add("card-description");
    cardDueDate.classList.add("card-due-date");
    cardPriority.classList.add("card-priority");

    cardTitle.innerHTML = cardArray[i].title;
    cardDescription.innerHTML = cardArray[i].description;
    cardDueDate.innerHTML = cardArray[i].dueDate;
    cardPriority.innerHTML = cardArray[i].priority;

    newCard.appendChild(cardPriority);
    newCard.appendChild(cardTitle);
    newCard.appendChild(cardDescription);
    newCard.appendChild(cardDueDate);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("card-delete-btn");
    deleteBtn.innerHTML = "x";
    deleteBtn.addEventListener("click", () => {
      newCard.remove();
    });

    newCard.appendChild(deleteBtn);
  }
}
