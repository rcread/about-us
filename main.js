let today = new Date();
let yyyy = today.getFullYear();
document.querySelector("#copyrightYear").innerHTML = yyyy;

const expandMenu = document.getElementsByClassName("open-menu");
const arrow = document.getElementsByClassName("arrow-down");
let i;

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

function scrollToTop() {
  window.scrollTo(0, 0)
}