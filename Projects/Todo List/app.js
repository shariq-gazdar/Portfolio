let title = document.querySelector("#taskTitle");
let description = document.querySelector("#taskDescription");
let addBtn = document.querySelector("#addTask");
let table = document.querySelector("#taskBox");
let taskObj = {};
let counter = 1;

// Load tasks from localStorage on page load
document.addEventListener("DOMContentLoaded", () => {
  loadTasksFromLocalStorage();
});

addBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (title.value !== "" && description.value !== "") {
    let key = title.value;
    let value = description.value;
    taskObj[key] = value;
    saveTasksToLocalStorage();
    addToTable(key, value);
    title.value = "";
    description.value = "";
  }
});

function addToTable(key, value) {
  let now = new Date();
  let newRow = table.insertRow(counter);
  let cell1 = newRow.insertCell(0);
  let cell2 = newRow.insertCell(1);
  let cell3 = newRow.insertCell(2);
  let cell4 = newRow.insertCell(3);
  let cell5 = newRow.insertCell(4);

  let timeString = now.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });

  newRow.dataset.key = key; // Assign a data attribute to identify the row

  cell1.textContent = counter;
  cell2.textContent = key;
  cell3.textContent = value;
  cell4.textContent = timeString;
  cell5.innerHTML = '<button class="removeTaskNew">Remove Task</button>';

  let removeButton = newRow.querySelector(".removeTaskNew");
  removeButton.addEventListener("click", () => {
    removeTask(newRow);
  });

  counter++;
}

function removeTask(row) {
  let key = row.dataset.key;
  delete taskObj[key];
  saveTasksToLocalStorage();
  table.deleteRow(row.rowIndex);

  // Update row numbers
  counter--;
  for (let i = 1; i < table.rows.length; i++) {
    table.rows[i].cells[0].textContent = i;
  }
}

function saveTasksToLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(taskObj));
}

function loadTasksFromLocalStorage() {
  let storedTasks = localStorage.getItem("tasks");
  if (storedTasks) {
    taskObj = JSON.parse(storedTasks);
    for (let key in taskObj) {
      addToTable(key, taskObj[key]);
    }
  }
}
