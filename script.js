document.addEventListener("DOMContentLoaded", nav);

function nav() {
  const burger = document.getElementById("Burger");
  const menu = document.getElementById("Menu");
  const closeIcon = document.querySelector("#Menu .closeicon");
  const submenuItems = document.querySelectorAll(".menu-list > li > a");
  const collapseButton = document.getElementById("collapse");
  const collapseButton2 = document.getElementById("collapse2");
  const greyMenu = document.getElementById("greymenu");
  const navLink = document.getElementById("Features");
  const navLink2 = document.getElementById("Company");
  const hoverMenu = document.getElementById("hovermenu");
  const hoverMenu2 = document.getElementById("hovermenu2");
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

  //Toggle Features Submenu Desktop

  navLink.addEventListener("click", () => {
    hoverMenu.classList.toggle("open");
  });

  //Toggle Company Submenu Desktop

  navLink2.addEventListener("click", () => {
    console.log("clicked");
    hoverMenu2.classList.toggle("open");
  });

  //Open Side Menu Mobile

  burger.addEventListener("click", () => {
    menu.classList.toggle("open");
    greyMenu.classList.toggle("open");
  });

  //Close Side Menu Mobile

  closeIcon.addEventListener("click", () => {
    menu.classList.remove("open");
    greyMenu.classList.remove("open");
  });

  //Toggle Features Submenu Mobile

  collapseButton.addEventListener("click", () => {
    const submenus = document.querySelectorAll(".submenu");
    submenus.forEach((submenu) => {
      submenu.classList.toggle("open");
    });
  });

  //Toggle Company Submenu Mobile

  collapseButton2.addEventListener("click", () => {
    const submenus = document.querySelectorAll(".submenu2");
    submenus.forEach((submenu) => {
      submenu.classList.toggle("open");
    });
  });
}
