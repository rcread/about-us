let today = new Date();
let yyyy = today.getFullYear();
document.querySelector("#copyrightYear").innerHTML = yyyy;

const expandMenu = document.getElementsByClassName("open-menu");
const arrow = document.getElementsByClassName("arrowDown");
let i;

const mediaQueryList = window.matchMedia("(max-width: 768px)");

const toggleFooterMenu = (e) => {
  for (i = 0; i < expandMenu.length; i++) {
    const menuLists = document.querySelectorAll(".footer__list--hidden");
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

let scrollButton = document.getElementById("scrollBtn");
window.onscroll = function () { scrollFunction() };
scrollButton.style.display = "none";

function scrollFunction() {
  if (document.documentElement.scrollTop > 20) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
}

function scrollToTop() {
  window.scrollTo(0, 0);
}

function showMenu(){
  document.querySelector('.hamburger').classList.toggle('open')
  document.querySelector('.menu__list').classList.toggle('active')
  document.querySelector('.hamburger__img').classList.toggle('active')
  document.querySelector('.hamburger__close').classList.toggle('active')
  document.querySelector('.menu').classList.toggle('active')
  document.querySelector('body').classList.toggle('active')
  document.querySelector('.background').classList.toggle('active')
  document.querySelector('.control__option--menu, .create--menu, .create__list--menu').classList.toggle('active')
}

function search(){
  document.querySelector('.search').classList.toggle('open')
  document.querySelector('.searchbar').classList.toggle('active')
  document.querySelector('.searchbar__label').classList.toggle('active')
  document.querySelector('.searchbar__input').classList.toggle('active')
}