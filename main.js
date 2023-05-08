const HamBtn = document.querySelector(".ham-Btn-C");
const menuBarOpen = document.querySelector(".bi-list");
const menuBarClose = document.querySelector(".bi-x-lg");
const menuContent = document.querySelector(".menu-content");

HamBtn.addEventListener("click", function () {
  menuContent.classList.toggle("hidden");
  menuBarOpen.classList.toggle("hidden");
  menuBarClose.classList.toggle("hidden");
});
