let title = document.querySelector("#taskTitle");
let description = document.querySelector("#taskDescription");
let addBtn = document.querySelector("#addTask");
let removeBtn = document.querySelector("#removeTask");
let key = title.value;
let value = description.value;
titleArr = [];
let taskObj = {};
let counter = 1;
addBtn.addEventListener("click", () => {
  event.preventDefault();
  if (title.value !== "" && description.value !== "") {
    let key = title.value;
    let value = description.value;
    taskObj[key] = value;
    titleArr.push(key);
    console.log(title.value);
    console.log(description.value);
    console.log(taskObj);
    console.log(taskObj[0]);
    counter++;
    addToTable();
  } else {
  }
});
addToTable = () => {
  let table = document.querySelector("#taskBox");
  let now = new Date();
  let newRow = table.insertRow(counter);
  let cell1 = newRow.insertCell(0);
  let cell2 = newRow.insertCell(1);
  let cell3 = newRow.insertCell(2);
  let cell4 = newRow.insertCell(3);
  let cell5 = newRow.insertCell(4);
  let timeString = now.toLocaleTimeString();
  cell1.textContent = counter;
  cell2.textContent = title.value;
  cell3.textContent = taskObj[title.value];
  cell4.textContent = timeString;
  cell5.innerHTML = removeBtn.outerHTML;
};
removeTask = () => {};
