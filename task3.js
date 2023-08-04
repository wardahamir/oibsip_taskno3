const todoForm = document.getElementById("todoForm");
const titleInput = document.getElementById("titleInput");
const descriptionInput = document.getElementById("descriptionInput");
const taskList = document.getElementById("taskList");

function createTitleElement(title) {
  const titleElement = document.createElement("strong");
  titleElement.textContent = title;
  return titleElement;
}

function createDescriptionElement(description) {
  const descriptionElement = document.createElement("p");
  descriptionElement.textContent = description;
  return descriptionElement;
}

function createDeleteButton(taskElement) {
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete-button");
  deleteButton.onclick = function () {
    taskList.removeChild(taskElement);
  };
  return deleteButton;
}

function addTask(title, description) {
  const taskItem = document.createElement("li");
  const titleElement = createTitleElement(title);
  const descriptionElement = createDescriptionElement(description);
  const deleteButton = createDeleteButton(taskItem);

  taskItem.appendChild(titleElement);
  taskItem.appendChild(descriptionElement);
  taskItem.appendChild(deleteButton);

  taskList.appendChild(taskItem);
}

todoForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const title = titleInput.value.trim();
  const description = descriptionInput.value.trim();

  if (title === "" || description === "") {
    return;
  }

  addTask(title, description);

  titleInput.value = "";
  descriptionInput.value = "";
});
