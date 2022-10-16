const links = document.querySelectorAll(".main-nav-link");
const openMenu = document.querySelector(`ion-icon[name="menu-outline"]`);
const closeMenu = document.querySelector(`ion-icon[name="close-outline"]`);
const header = document.querySelector(".header");
const hero = document.querySelector(".section-hero");
const body = document.body;
let isMenuOpen = false;

openMenu.addEventListener("click", handleOpenMenuClick);
closeMenu.addEventListener("click", handleOpenMenuClick);
links.forEach(function (link) {
  link.addEventListener("click", function (event) {
    // Close the overlay
    header.classList.remove("open");
    isMenuOpen = !isMenuOpen;

    // Go to the location
    const location = link.getAttribute("href");
    window.location = location;

    event.preventDefault();
  });
});

function handleOpenMenuClick() {
  if (
    !openMenu.getAttribute("name") === "menu-outline" ||
    !closeMenu.getAttribute("name") === "close-outline"
  )
    return;

  if (!isMenuOpen) {
    header.classList.add("open");
    isMenuOpen = !isMenuOpen;
    return;
  }
  header.classList.remove("open");
  isMenuOpen = !isMenuOpen;
  return;
}

const obs = new IntersectionObserver(
  function (entries) {
    const entry = entries[0];
    !entry.isIntersecting
      ? body.classList.add("sticky")
      : body.classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0,
  }
);

obs.observe(hero);
