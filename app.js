let menuBtn = document.querySelector("#menuBtn");
let closeBtn = document.querySelector("#closeBtn");
let menu = document.querySelector("#optionMob");
let body = document.querySelector("#mainBody");
menuBtn.addEventListener("click", () => {
  menu.classList.remove("hidden");
  body.classList.add("opacity-10");
});

closeBtn.addEventListener("click", () => {
  menu.classList.add("hidden");
  body.classList.remove("opacity-10");
  body.classList.add("opacity-100");
});
