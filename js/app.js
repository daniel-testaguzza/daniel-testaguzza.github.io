// Navigation Drop Down on Scroll
const Scroll = window.page;
window.onscroll = function() {
  const currentScrollPosition = window.pageYOffset;
  if (scroll > currentScrollPosition) {
    document.querySelector(".nav__list").style.top = "0";
  } else {
    document.querySelector(".nav__list").style.top = "-55px";
  }
  scroll = currentScrollPosition;
};
