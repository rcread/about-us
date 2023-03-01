let today = new Date();
let yyyy = today.getFullYear();
document.querySelector("#copyrightYear").innerHTML = yyyy;

let expandMenu = document.getElementsByClassName("open-menu");
let arrow = document.getElementsByClassName("arrow-down");
let i;

for (i = 0; i < expandMenu.length; i++) {
  expandMenu[i].addEventListener("click", function() {
    this.classList.toggle("active");
    this.querySelector(".arrow-down").classList.toggle("arrow-active");
    let footerMenuList = this.nextElementSibling;
    if (window.matchMedia ('(width: <768px)') & footerMenuList.style.display === "block") {
      footerMenuList.style.display = "none";
    } 
    else {
      footerMenuList.style.display = "block";
    }
  });
}