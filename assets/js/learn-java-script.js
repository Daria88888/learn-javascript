
window.onscroll = handleHeaderStyle;

const header = document.getElementById("header");

function handleHeaderStyle() {
  if (window.scrollY > 0) {
    header.classList.add("navigation__dark");
  } else {
    header.classList.remove("navigation__dark");
  }
}