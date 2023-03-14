let today = new Date();
let yyyy = today.getFullYear();
document.querySelector("#copyrightYear").innerHTML = yyyy;

const expandMenu = document.getElementsByClassName("open-menu");
const arrow = document.getElementsByClassName("arrowDown");
let i;

const mediaQueryList = window.matchMedia("(max-width: 768px)");

const toggleFooterMenu = (e) => {
  for (i = 0; i < expandMenu.length; i++) {
    const menuLists = document.querySelectorAll(".footer__menu-list--hidden");
    const arrows = document.querySelectorAll(".arrowDown");

    menuLists.forEach((menuList) => {
      menuList.style.display = "none";
    });

    arrows.forEach((arrow) => {
      arrow.classList.remove("arrow--active");
    });

    if (!e.matches) {
      menuLists.forEach((menuList) => {
        menuList.style.display = "block";
      });
    }

    expandMenu[i].addEventListener("click", function () {
      this.classList.toggle("active");
      this.querySelector(".arrowDown").classList.toggle("arrow--active");
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

let mybutton = document.getElementById("scrollBtn");
window.onscroll = function () { scrollFunction() };

mybutton.style.display = "none";

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function scrollToTop() {
  window.scrollTo(0, 0);
}
