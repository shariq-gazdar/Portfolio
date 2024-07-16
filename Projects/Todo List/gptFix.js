let title = document.querySelector("#taskTitle");
let description = document.querySelector("#taskDescription");
let addBtn = document.querySelector("#addTask");
let table = document.querySelector("#taskBox");
let removeBtn = document.querySelector("#removeTask");
let tasks = [];

addBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (title.value !== "" && description.value !== "") {
    let task = {
      title: title.value,
      description: description.value,
      time: new Date().toLocaleTimeString(),
    };
    tasks.push(task);
    addToTable(task);
    title.value = "";
    description.value = "";
  }
});

function addToTable(task) {
  let newRow = table.insertRow(-1);
  let cell1 = newRow.insertCell(0);
  let cell2 = newRow.insertCell(1);
  let cell3 = newRow.insertCell(2);
  let cell4 = newRow.insertCell(3);
  let cell5 = newRow.insertCell(4);

  cell1.textContent = table.rows.length - 1;
  cell2.textContent = task.title;
  cell3.textContent = task.description;
  cell4.textContent = task.time;

  removeBtn.addEventListener("click", () => {
    removeTask(newRow.rowIndex - 1);
  });
  cell5.appendChild(removeBtn);
}

function removeTask(index) {
  tasks.splice(index, 1);
  table.deleteRow(index + 1); // Adjust for header row
}
