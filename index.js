const listElements = ["apple", "banana", "grape", "peach", "melon"];

const dropdown = document.getElementsByClassName("dropdown")[0];
const list = document.getElementById("dropdown-list");
const dropdownBtn = document.getElementsByClassName("dropdown-wrapper")[0];

dropdownBtn.addEventListener("click", () => {});

listElements.forEach((element) => {
  const li = document.createElement("li");
  li.append(element);

  list.appendChild(li);
});

function changeBackground() {
  const element = document.getElementById("hello");
  element.style.backgroundColor = "red";
}

function openDropdown() {
  const height = dropdown.style.height;

  height <= 0 ? dropdown.style.height - "500px" : dropdown.sty;

  list.style.height = "0px";
}
