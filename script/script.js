// AOS.init();

var projects = document.getElementById("projects").getBoundingClientRect();
var contact = document.getElementById("contact").getBoundingClientRect();


const li = document.querySelectorAll(".linking");

const sec = document.querySelectorAll(".sections");

function active() {
  let len = sec.length;
  while (--len && window.scrollY + 400 < sec[len].offsetTop) {}
  li.forEach((ltx) => ltx.classList.remove("active"));
  li[len].classList.add("active");
}

active();
window.addEventListener("scroll", active);


AOS.init();
        var loader = document.getElementById("loader");
        loader.style.display = "block";
        
        
        window.addEventListener("load", delayl() )
        
        function delayl(){
            setTimeout(function(){
                loader.style.display = "none";
            }, 500)
            // window.addEventListener("load", function () {})
        }