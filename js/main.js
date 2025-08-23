let menu = document.querySelector("#menu-button");
let overlay = document.querySelector(".overlay");

menu.addEventListener("click", (e) => {
  overlay.classList.toggle("opened");
  menu.classList.toggle("cross");
  menu.nextElementSibling.classList.toggle("opened");
});

overlay.addEventListener("click", (e) => {
  overlay.classList.toggle("opened");
  menu.classList.toggle("cross");
  menu.nextElementSibling.classList.toggle("opened");
});
