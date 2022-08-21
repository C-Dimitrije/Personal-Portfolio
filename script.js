// AOS.init();

var projects = document.getElementById("projects").getBoundingClientRect();
var about = document.getElementById("about").getBoundingClientRect();
var contact = document.getElementById("contact").getBoundingClientRect();


const li = document.querySelectorAll(".linking");

const sec = document.querySelectorAll(".sections");
// console.log(sec)

function active() {
  let len = sec.length;
  while (--len && window.scrollY + 300 < sec[len].offsetTop) {}
  li.forEach((ltx) => ltx.classList.remove("active"));
  li[len].classList.add("active");
}

active();
window.addEventListener("scroll", active);
