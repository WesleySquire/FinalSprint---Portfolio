// This will grab info for the active nav bar
// let home = document.querySelector("#home");
// let work = document.querySelector("#work");
// let about = document.querySelector("#about");
// let contact = document.querySelector("#contact");

// home.classList.add("active");

// This is grabbing the required info needed for scroll

let text = document.querySelector("#text");
let cloud1 = document.querySelector("#cloud1");
let cloud2 = document.querySelector("#cloud2");
let rock1 = document.querySelector("#rock1");
let header = document.querySelector(".Content");
let btn = document.querySelector("#btn");

// This function says on scroll

window.addEventListener("scroll", (e) => {
  e.preventDefault();
  let scrollValue = window.scrollY;

  // make .text style from the top change with formula from scrollValue
  text.style.top = 50 + scrollValue * -0.25 + "%";

  cloud1.style.top = scrollValue * -0.5 + "px";
  cloud1.style.left = scrollValue * -0.5 + "px";

  cloud2.style.top = scrollValue * -0.5 + "px";
  cloud2.style.left = scrollValue * 2 + "px";

  rock1.style.top = scrollValue * 0.25 + "px";

  header.style.top = scrollValue * 0.5 + "px";

  btn.style.marginTop = scrollValue * 1.5 + "px";
});
