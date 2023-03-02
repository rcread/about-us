let today = new Date();
let yyyy = today.getFullYear();
document.querySelector("#copyrightYear").innerHTML = yyyy;

let expandMenu = document.getElementsByClassName("open-menu");
let arrow = document.getElementsByClassName("arrow-down");
let i;

// for (i = 0; i < expandMenu.length; i++) {
//   expandMenu[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     this.querySelector(".arrow-down").classList.toggle("arrow-active");
//     let footerMenuList = this.nextElementSibling;
//     if (window.matchMedia ('(width: <768px)') & footerMenuList.style.display === "block") {
//       footerMenuList.style.display = "none";
//     } 
//     else {
//       footerMenuList.style.display = "block";
//     }
//   });
// }

const mediaQueryList = window.matchMedia("(max-width: 768px)");

const toggleFooterMenu = (e) => {
  for (i = 0; i < expandMenu.length; i++) {
    const menuLists = document.querySelectorAll(".footer__menu-list--hidden");
    const arrows = document.querySelectorAll(".arrow-down");

    menuLists.forEach((menuList) => {
      menuList.style.display = "none";
    });

    arrows.forEach((arrow) => {
      arrow.classList.remove("arrow-active");
    });

    if (!e.matches) {
      menuLists.forEach((menuList) => {
        menuList.style.display = "block";
      });
    }

    expandMenu[i].addEventListener("click", function () {
      this.classList.toggle("active");
      this.querySelector(".arrow-down").classList.toggle("arrow-active");
      let footerMenuList = this.nextElementSibling;

      if (e.matches) {
        if (footerMenuList.style.display === "block") {
          footerMenuList.style.display = "none";
        } else {
          footerMenuList.style.display = "block";
        }
      }
    });
  }
};

toggleFooterMenu(mediaQueryList);

mediaQueryList.addEventListener("change", toggleFooterMenu);