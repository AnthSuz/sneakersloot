console.log("it works");

const nav = document.querySelector(".menu-resp");
console.log(nav);
nav.addEventListener("click", () => {
  console.log("ici");
  document.body.classList.toggle("open");
});
