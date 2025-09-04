const trigramBtn = document.querySelector(".trigram");
const menuList = document.querySelector(".menu-list");
trigramBtn.addEventListener("click", () => {
  menuList.classList.toggle("show");

  if (menuList.classList.contains("show")) {
    trigramBtn.innerHTML =
      ' <img src="./assets/images/icon-menu-close.svg" alt="" />';
  } else {
    trigramBtn.innerHTML =
      ' <img src="./assets/images/icon-menu.svg" alt="" />';
  }
});

document.addEventListener("click", (event) => {
  if (!trigramBtn.contains(event.target) && !menuList.contains(event.target)) {
    menuList.classList.remove("show");
  }
});
