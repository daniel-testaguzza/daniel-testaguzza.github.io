const Scroll = window.page;
window.onscroll = function() {
  const currentScrollPos = window.pageYOffset;
  if (scroll > currentScrollPos) {
    document.querySelector(".navbar").style.top = "0";
  } else {
    document.querySelector(".navbar").style.top = "-50px";
  }
  scroll = currentScrollPos;
};
