console.log("it works");

const nav = document.querySelector(".menu-resp");
console.log(nav);
nav.addEventListener("click", () => {
  console.log("ici");
  document.body.classList.toggle("open");
});

const shipping = document.querySelector(".shipping-bar svg");
shipping.addEventListener("click", () => {
  document.body.classList.toggle("open-shipping");
});
