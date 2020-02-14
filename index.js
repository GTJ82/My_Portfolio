const overlay = document.getElementById("overlay");
const close = document.getElementById("close");

document.getElementById("menu").addEventListener("click", function() {
  overlay.classList.add("show-menu");
});

document.getElementById("close").addEventListener("click", function() {
  overlay.classList.remove("show-menu");
});
