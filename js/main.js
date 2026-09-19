let spans = document.getElementById("spans");

spans.onclick = function () {
  let navBar = this.nextElementSibling;
  if (navBar.style.maxHeight) {
    navBar.style.maxHeight = null;
  } else {
    navBar.style.maxHeight = navBar.scrollHeight + "px";
  }
};
