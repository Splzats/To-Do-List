export function renderCards(cardArray, target) {
  const targetBoardElement = document.getElementById(`${target}Board`);
  for (let i = cardArray.length - 1; i < cardArray.length; i++) {
    const newCard = document.createElement("div");
    newCard.classList.add("item-card");
    targetBoardElement.appendChild(newCard);

    const cardTitle = document.createElement("div");
    const cardDescription = document.createElement("p");
    const cardDueDate = document.createElement("div");
    const cardPriority = document.createElement("div");

    const cardFooter = document.createElement("div");

    cardTitle.classList.add("card-title");
    cardDescription.classList.add("card-description");
    cardDueDate.classList.add("card-due-date");
    cardPriority.classList.add("card-priority");
    cardFooter.classList.add("card-footer");

    cardTitle.innerHTML = cardArray[i].title;
    cardDescription.innerHTML = cardArray[i].description;
    cardDueDate.innerHTML = `Due: ${cardArray[i].dueDate}`;

    if (cardArray[i].priority === "high") {
      cardPriority.classList.add("high-priority");
    } else if (cardArray[i].priority === "moderate") {
      cardPriority.classList.add("moderate-priority");
    } else if (cardArray[i].priority === "low") {
      cardPriority.classList.add("low-priority");
    }

    newCard.appendChild(cardPriority);
    newCard.appendChild(cardTitle);
    newCard.appendChild(cardDescription);
    newCard.appendChild(cardFooter);

    cardFooter.appendChild(cardDueDate);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("card-delete-btn");
    deleteBtn.innerHTML = "x";
    deleteBtn.addEventListener("click", () => {
      newCard.remove();
    });

    cardFooter.appendChild(deleteBtn);
  }
}
