let today = new Date();
let yyyy = today.getFullYear();
document.querySelector("#copyrightYear").innerHTML = yyyy;

// const footerMenu = document.querySelector(".heading-container");
// const footerMenuList = document.querySelector(".footer__menu-list")

// footerMenu.addEventListener("click", (expandMenu) => {
//     function expandMenu() {
//         footerMenu.classList.toggle("active");
//         footerMenuList.classList.toggle("active");
//     }
// })

let expandMenu = document.getElementsByClassName("heading-container");
let i;

for (i = 0; i < expandMenu.length; i++) {
  expandMenu[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let footerMenuList = this.nextElementSibling;
    if (window.innerWidth < 768 & footerMenuList.style.display === "block") {
      footerMenuList.style.display = "none";
    } else {
      footerMenuList.style.display = "block";
    }
  });
}