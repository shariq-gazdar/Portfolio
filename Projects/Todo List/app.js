let title = document.querySelector("#taskTitle");
let description = document.querySelector("#taskDescription");
let addBtn = document.querySelector("#addTask");
let removeBtn = document.querySelector("#removeTask");
titleArr = [];
let taskObj = {};
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
    addToTable();
  } else {
  }
});
addToTable = () => {
  let table = document.querySelector("#taskBox");
  let newRow = table.insertRow(2);
  let cell1 = newRow.insertCell(0);
  let cell2 = newRow.insertCell(1);
  let cell3 = newRow.insertCell(2);
  let cell4 = newRow.insertCell(3);
  let cell5 = newRow.insertCell(4);
  titleArr.forEach((element, a) => {
    let now = new Date();
    let timeString = now.toLocaleTimeString();
    cell1.textContent = a + 2;
    cell2.textContent = element;
    cell3.textContent = taskObj[element];
    cell4.textContent = timeString;
    cell5.innerHTML = removeBtn.outerHTML;
  });
};
