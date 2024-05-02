document.addEventListener("DOMContentLoaded", nav);

function nav() {
  const burger = document.getElementById("Burger");
  const menu = document.getElementById("Menu");
  const closeIcon = document.querySelector("#Menu .closeicon");
  const submenuItems = document.querySelectorAll(".menu-list > li > a");
  const collapseButton = document.getElementById("collapse");
  const collapseButton2 = document.getElementById("collapse2");
  const greyMenu = document.getElementById("greymenu");

  // Toggle submenu visibility
  submenuItems.forEach((item) => {
    item.addEventListener("click", function (event) {
      const submenu = this.nextElementSibling;
      if (submenu && submenu.classList.contains("submenu")) {
        event.preventDefault();
        submenu.classList.toggle("open");
      }
    });
  });

  burger.addEventListener("click", () => {
    menu.classList.toggle("open");
    greyMenu.classList.toggle("open");
  });

  closeIcon.addEventListener("click", () => {
    menu.classList.remove("open");
    greyMenu.classList.remove("open");
  });
  collapseButton.addEventListener("click", () => {
    const submenus = document.querySelectorAll(".submenu");
    submenus.forEach((submenu) => {
      submenu.classList.toggle("open");
    });
  });
  collapseButton2.addEventListener("click", () => {
    const submenus = document.querySelectorAll(".submenu2");
    submenus.forEach((submenu) => {
      submenu.classList.toggle("open");
    });
  });
}
