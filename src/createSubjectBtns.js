export function SubjectBtn(subject) {
  this.createSubjectBtn = function () {
    const subjectBoxElement = document.querySelector(".subject-box");
    const newBtn = document.createElement("button");
    newBtn.classList.add("subject-btn");
    newBtn.setAttribute("id", `${subject}Btn`);
    newBtn.innerHTML = `${subject}`;

    subjectBoxElement.appendChild(newBtn);
  };
}
