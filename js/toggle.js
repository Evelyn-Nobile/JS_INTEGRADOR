window.addEventListener("DOMContentLoaded", (event) => {
  const menuBtn = document.getElementById("btn-menu");
  const nav = document.querySelector(".main__nav");
  const body = document.querySelector("body");

  menuBtn.addEventListener("click", (event) => {
    menuBtn.classList.toggle("close");
    nav.classList.toggle("visible");
    body.classList.toggle("no-scroll");
  });
});


