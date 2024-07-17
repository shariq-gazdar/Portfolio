let title = document.querySelector("#taskTitle");
let description = document.querySelector("#taskDescription");
let addBtn = document.querySelector("#addTask");
let table = document.querySelector("#taskBox");
let taskObj = {};
let counter = 1;
let totalTask = document.querySelector("#taskNumber");
let completeNumber = document.querySelector("#completeNumber");
let incompleteNumber = document.querySelector("#IncompleteNumber");
let completePer = document.querySelector("#complete");
// let completeBtn = document.querySelector("");
let completeCounterVal = 0;
let IncompleteCounterVal = 0;
let completeCounter = completeCounterVal;
let IncompleteCounter = IncompleteCounterVal;
let key = title.value;
let value = description.value;
localStorage.setItem(completeCounter, "0");

updateStatus = () => {
  totalTask.innerText = ` Tasks :${counter - 1}`;
  console.log();
  completeNumber.innerText = `Complete Tasks ${localStorage.getItem(
    "Completed"
  )}`;
  incompleteNumber.innerText = `Incomplete Task${localStorage.getItem(
    "Incomplete"
  )}`;
};
addBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (title.value !== "" && description.value !== "") {
    let key = title.value;
    let value = description.value;
    localStorage.setItem(key, value);
    console.log(localStorage.getItem(key, value));
    addToTable(localStorage.getItem(key), localStorage.getItem(value));
    updateStatus();
  } else {
    console.log("No value found in both fields");
  }
});

function addToTable(key, value) {
  if (
    key == 0 ||
    value == 0 ||
    Number.isInteger(key) ||
    Number.isInteger(value) ||
    key === "Completed" ||
    key === "Incomplete"
  ) {
    console.log("No value found in localStorage");
  } else {
    let now = new Date();
    let newRow = table.insertRow(counter);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);
    let cell6 = newRow.insertCell(5);
    let timeString = now.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    });

    newRow.dataset.key = key;
    console.log(key, "Key");
    console.log(value, "Value");
    cell1.textContent = counter;
    cell2.textContent = key;
    cell3.textContent = value;
    cell4.textContent = timeString;
    cell5.innerHTML =
      '<button class="removeTaskNewComplete">Completed</button>';
    cell6.innerHTML =
      '<button class="removeTaskNewIncomplete">Incomplete</button>';
    let removeButtonComplete = newRow.querySelector(".removeTaskNewComplete");
    removeButtonComplete.addEventListener("click", () => {
      // Increment the counter first

      // Remove the task
      removeTask(newRow);

      // Store the updated counter value in localStorage
      localStorage.setItem("Completed", completeCounterVal);
      completeCounterVal + 1;

      // Log the stored value for debugging
      console.log(localStorage.getItem("Completed"));

      // Update the task status
      updateStatus();

      // Optionally reload the page if needed
      // location.reload();
    });

    let removeButtonIncomplete = newRow.querySelector(
      ".removeTaskNewIncomplete"
    );
    removeButtonIncomplete.addEventListener("click", () => {
      // Increment the counter first
      IncompleteCounterVal + 1;

      // Remove the task
      removeTask(newRow);

      // Store the updated counter value in localStorage
      localStorage.setItem("Incomplete", IncompleteCounterVal);

      // Log the stored value for debugging
      console.log(localStorage.getItem("Incomplete"));

      // Update the task status
      updateStatus();

      // Optionally reload the page if needed
      // location.reload();
    });

    counter++;
  }
}

function removeTask(row) {
  let key = row.dataset.key;
  localStorage.removeItem(key);
  localStorage.removeItem(value);
  table.deleteRow(row.rowIndex);
  counter--;
  for (let i = 1; i < table.rows.length; i++) {
    table.rows[i].cells[0].textContent = i;
  }
}
if (localStorage.length !== 0) {
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);
    addToTable(key, value);
    updateStatus();
  }
}
