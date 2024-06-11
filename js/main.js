const elSiteHeader = document.querySelector(".site-header");
const elSiteHeaderToggleButton = elSiteHeader.querySelector(
  ".site-header__toggle-button"
);

if (elSiteHeaderToggleButton) {
  elSiteHeaderToggleButton.addEventListener("click", function () {
    elSiteHeader.classList.toggle("site-header__open");
  });
}
